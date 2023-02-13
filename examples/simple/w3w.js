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
            controlName: 'What3Words Map',
            fallbackDisableSubmit: false,
            description: 'What3Words map component',
            iconUrl: "one-line-text",
            groupName: 'Visual',
            version: '1.3',
            properties: {
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
                description: true,
            }
        };
    }

    static properties = {
        name: 'Hello',
        title: 'Hello',
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
                    allow="geolocation *;"
                    src="https://what3words.com/${this.wordAddress}"
                    height=${this.height}
            ></iframe>`;
    }
}

// registering the web component.
const elementName = 'W3WMap';
customElements.define(elementName, SampleIframe);
