import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class SampleIframe extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        height: 100%;
        width: 100%;
        display: block;
      }

      .frame {
        display: inline-block;
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
      }
    `;

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'What3Words-Map',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render url view with the frame',
            iconUrl: "one-line-text",
            groupName: 'Visual',
            version: '1.3',
            properties: {
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes'
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                },
                wordAddress: {
                    type: 'string',
                    title: 'What3Words',
                    description: '3 Word address',
                }
            },
            standardProperties: {
                readOnly: true,
                required: true,
                description: true,
            }
        };
    }

    static properties = {
        name: 'W3w',
        title: 'W3w',
        src: 'https://www.wikipedia.org/',
        height: '1000px',
        wordAddress: 'pretty.needed.chill'
    }

    // Render the UI as a function of component state
    render() {
        let styles = {height: this.height};

        return html`
            <iframe
                    class="frame"
                    style=${styleMap(styles)}
                    name=${this.name}
                    allow="geolocation *; microphone; camera"
                    title=${this.title}
                    src="https://what3words.com/${this.wordAddress}"
                    height=${this.height}
            ></iframe>`;
    }
}

// registering the web component.
const elementName = 'w3wmap-iframe';
customElements.define(elementName, SampleIframe);
