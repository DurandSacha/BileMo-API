
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/bilemo.css';


import React from 'react';
import { render } from 'react-dom';

import ResponseView from './Components/ResponseView';
import GenerateButton from './Components/generateButton';

render(<GenerateButton />, document.getElementById('js-button-generate'));



