import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/bilemo.css';


import React from 'react';
import { render } from 'react-dom';

import ResponseView from './Components/ResponseView';
import HelloReact from './Components/HelloReact';
import FrontToken from './Components/frontToken';
import PostForm from './Components/PostForm';
import GenerateButton from './Components/generateButton';

const shouldShowHeart = true;
render(<GenerateButton />, document.getElementById('js-button-generate'));

render(<HelloReact withHeart={shouldShowHeart} />, document.getElementById('js-hello'));
render(<ResponseView />, document.getElementById('js-response-view'));
render(<FrontToken />, document.getElementById('js-token'));
render(<PostForm />, document.getElementById('js-form-post'));