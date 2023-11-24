import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Navigation from '../Navigation';
import ResearchPage from '../ResearchPage';
import PublicationsPage from '../PublicationsPage';
import SoftwarePage from '../SoftwarePage';
import TeachingPage from '../TeachingPage';
import TalksPage from '../TalksPage';
import BlogPage from '../BlogPage';
import CurriculumVitaePage from '../CurriculumVitaePage';

import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <CssBaseline enableColorScheme />
    <div>
      <Navigation />
      <Routes>
        <Route exact path={ROUTES.LANDING} element={ <ResearchPage/> } />
        <Route exact path={ROUTES.PUBLICATIONS} element={ <PublicationsPage/> } />
        <Route exact path={ROUTES.SOFTWARE} element={ <SoftwarePage/> } />
        <Route exact path={ROUTES.TEACHING} element={ <TeachingPage/> } />
        <Route exact path={ROUTES.TALKS} element={ <TalksPage/> } />
        <Route exact path={ROUTES.BLOG} element={ <BlogPage/> } />
        <Route exact path={ROUTES.CV} element={ <CurriculumVitaePage/> } />
      </Routes>
    </div>
  </Router>
);

export default App;
