import React, { FunctionComponent } from 'react';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import CleanCSS from 'clean-css';

const compressor = new CleanCSS();

interface TemplateProps {
    title: string;
    description?: string;
    lang?: string;
    children?: JSX.Element | string | null;
}

const Template: FunctionComponent<TemplateProps> = ({
    title,
    lang,
    description,
    children
}) => (
    <html lang={lang ? lang : 'en'}>
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: compressor.minify(
                        readFileSync(resolve(__dirname, 'global.css'), 'utf-8')
                    ).styles
                }}
            ></style>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
        </head>
        <body>
            <div className="container">{children}</div>
        </body>
    </html>
);
export default Template;
