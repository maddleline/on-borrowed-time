import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import Header from '../components/Header';
import Home from './Home.jsx';
import Intro from './Intro.jsx';
import LeftMenu from '../components/LeftMenu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';
import Timeline from '../components/Timeline';
import { useHistory } from 'react-router-dom';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isClicked, setNavigateAway] = useState(false);
  const [scenes, setScenes] = useState(
    props.pageId === 'home'
      ? props.year.scenes
        ? props.year.scenes.length
        : 0
      : 0
  );
  const [hash, setHash] = useState(window.location.hash.substring(1) || '1984');
  let history = useHistory();

  const toggleLeftMenu = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  const interYearNavigation = year => {
    setScenes(0); // collapse timeline
    setNavigateAway(true);
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);

    // collapse scene timeline
    // content fade out
    // navigate to intro
    // content fade in
    // expand scene timeline
  };

  const onClickTimeline = () => {
    setNavigateAway(true);
    // if year
    // inter-year

    // if scene
    // intra-year
  };

  const onClickFooter = () => {
    if (props.changingParam === 'year') {
      setScenes(0); // collapse timeline
    }

    setTimeout(function() {
      // executed after 2 seconds
      if (props.changingParam === 'year') {
        // if year end
        // inter-year
        history.push(`/${props.nextParams.year}`);
      } else {
        // else
        // intra-year
        history.push(
          `/${props.nextParams.year}/${props.nextParams.scene}/${props.nextParams.page}`
        );
      }
    }, 2000);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = (
        <Home
          {...props}
          hash={hash}
          setHash={setHash}
          isClicked={isClicked}
          setClicked={setNavigateAway}
        />
      );
      break;
    case 'intro':
      pageComponent = <Intro {...props} onClickFooter={onClickFooter} />;
      break;
    case 'event':
      pageComponent = (
        <Event
          {...props}
          setNavigateAway={setNavigateAway}
          onClickFooter={onClickFooter}
        />
      );
      break;
    case 'artifacts':
      pageComponent = <Artifacts {...props} onClickFooter={onClickFooter} />;
      break;
    case 'reflection':
      pageComponent = (
        <Reflection
          {...props}
          setNavigateAway={setNavigateAway}
          onClickFooter={onClickFooter}
        />
      );
      break;
    default:
      pageComponent = (
        <Event
          {...props}
          setNavigateAway={setNavigateAway}
          onClickFooter={onClickFooter}
        />
      );
  }

  let isNewYear = props.pageId === 'event' && props.romanSceneNumber === 'I';
  let isYearEnd = props.isLastScene && props.isLastPage;
  let timelineClasses = isMenuActive
    ? 'contrast-text'
    : props.pageId === 'home'
    ? 'text-white'
    : props.pageId === 'event'
    ? 'contrast-text gray'
    : 'contrast-text';

  return (
    <>
      <Header
        label={
          props.pageId === 'intro'
            ? ''
            : props.pageId === 'home'
            ? props.year.blurb
            : `${props.year.id} ${props.year.title}`
        }
        pageId={props.pageId}
        title={props.scene ? props.scene.title : ''}
        isClicked={isClicked}
        romanSceneNumber={props.romanSceneNumber}
      />
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
      />
      <span
        className={`absolute text-3xl cursor-pointer z-40 left-menu-bullet ${timelineClasses}`}
        onClick={toggleLeftMenu}
      >
        &#8226;
      </span>
      <Link
        to="/"
        className={`absolute text-3xl cursor-pointer z-40 medium-caption page-title ${timelineClasses}`}
      >
        On Borrowed Time
      </Link>
      <Timeline
        timelineClasses={timelineClasses}
        pageId={props.pageId}
        sceneIndex={props.sceneIndex}
        previewedYear={hash}
        years={props.years}
        year={props.year}
        scenes={scenes}
        setScenes={setScenes}
        isYearEnd={isYearEnd}
        isClicked={isClicked}
        handleClickYear={year => {
          interYearNavigation(year);
        }}
      />
      {pageComponent}
    </>
  );
};

UIShell.defaultProps = {
  year: { id: '', title: '' }
};

UIShell.propTypes = {
  pageId: PropTypes.string,
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  sceneIndex: PropTypes.string,
  romanSceneNumber: PropTypes.string,
  isLastScene: PropTypes.bool,
  isLastPage: PropTypes.bool,
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default UIShell;
