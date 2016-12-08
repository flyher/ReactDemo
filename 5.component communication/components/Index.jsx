'use strict'
var ReactDOM = require('react-dom');
var ArticleScore = require('./ArticleScore/ArticleScore');
ReactDOM.render(
  <ArticleScore></ArticleScore>,
  document.getElementById('content')
);

/**
 * 
 * Index--
 *   ArticleScore
 *     |
 *     |--MainFilter
 *     |          |--TitleFilter
 *     |
 *     |
 *     |--MainTable
 *                |--ScoreHeader
 *                |--ScoreRow
 */