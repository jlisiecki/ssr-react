import express from 'express';
import React, { FunctionComponent } from 'react';
import { renderToString } from 'react-dom/server';
import Home from './pages/home';
const app = express();

const PORT = process.env.PORT || 3456;

const renderHTML = (component: FunctionComponent) => {
    return '<!DOCTYPE html>' + renderToString(component({}) || <></>);
};

app.get('/', (_, response) => {
    response.send(renderHTML(Home));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
