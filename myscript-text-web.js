/* eslint-disable no-underscore-dangle */
import { html, PolymerElement } from '@polymer/polymer';

import * as MyScript from 'myscript/dist/myscript.esm';

import 'myscript-common-element/myscript-common-element';
import 'myscript-common-element/myscript-stylesheet';
import './myscript-text-exports';


/**
`myscript-text-web` is a turnkey solution for those who need to quickly implement MyScript Text recognition.

    <myscript-text-web
        applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
        hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY"
        language="en_US">
    </myscript-text-web>

### Styling

`<myscript-text-web>` provides the following custom properties for styling:

CSS variable | Default
-------------|--------
`--myscript-text-web-background` | none
`--myscript-text-web-color` | #FFFFFF
`--myscript-text-web-button-background` | #1A9FFF
`--myscript-text-web-button-focus-background` | #1A9FFF
`--myscript-text-web-button-disabled-background` | #F5F6F7
`--myscript-text-web-error-background` | Error image
`--myscript-text-web-loader` | Spinner
`--myscript-text-web-exports-color` | #1580CD
`--myscript-text-web-exports-background-color` | #EDF0F2
`--myscript-text-web-exports-selected-color` | #FFFFFF
`--myscript-text-web-exports-selected-background-color` | #1580CD
`--myscript-text-web-exports-predicted-color` | #73818C
`--myscript-text-web-exports-completed-color` | #1A9FFF

@demo src/demo-app/examples/non-version-specific/get_started.html Get started [V4]
@demo src/demo-app/examples/non-version-specific/customize_style.html Customize style and change fonts [V4]
@demo src/demo-app/examples/non-version-specific/interact.html Interact [V4]
@demo src/demo-app/examples/v4/custom_resources.html Use a custom resource [V4]
@demo src/demo-app/examples/non-version-specific/custom_controls.html Redefining the controls [V4]
@demo src/demo-app/examples/index.html Other examples
*/
class MyScriptTextWeb extends PolymerElement {
  static get template() {
    return html`
        <style include="myscript-stylesheet">
            :host {
                --myscript-text-web-background: var(--myscript-editor-background);
                --myscript-text-web-color: var(--myscript-editor-color);
                --myscript-text-web-hover-color: var(--myscript-editor-hover-color);
                --myscript-text-web-focus-color: var(--myscript-editor-focus-color);
                --myscript-text-web-disabled-color: var(--myscript-editor-disabled-color);
                --myscript-text-web-capture-background: var(--myscript-editor-capture-background);
                --myscript-text-web-error-background: var(--myscript-editor-error-background);
                --myscript-text-web-loader: var(--myscript-editor-loader);
                --myscript-text-web-error: var(--myscript-editor-error);
                --myscript-text-web-exports-color: #1580CD;
                --myscript-text-web-exports-background-color: #EDF0F2;
                --myscript-text-web-exports-selected-color: #FFFFFF;
                --myscript-text-web-exports-selected-background-color: #1580CD;
                --myscript-text-web-exports-predicted-color: #73818C;
                --myscript-text-web-exports-completed-color: #1A9FFF;

                box-sizing: border-box;
                touch-action: none;
                display: block;
            }

            [hidden] {
                display: none;
            }

            myscript-text-exports {
                --myscript-text-exports-color: var(--myscript-text-web-exports-color);
                --myscript-text-exports-background-color: var(--myscript-text-web-exports-background-color);
                --myscript-text-exports-selected-color: var(--myscript-text-web-exports-selected-color);
                --myscript-text-exports-selected-background-color: var(--myscript-text-web-exports-selected-background-color);
                --myscript-text-exports-predicted-color: var(--myscript-text-web-exports-predicted-color);
                --myscript-text-exports-completed-color: var(--myscript-text-web-exports-completed-color);

                height: 100px;
            }

            myscript-common-element {
                --myscript-common-element-background: var(--myscript-text-web-background);
                --myscript-common-element-color: var(--myscript-text-web-color);
                --myscript-common-element-hover-color: var(--myscript-text-web-hover-color);
                --myscript-common-element-focus-color: var(--myscript-text-web-focus-color);
                --myscript-common-element-disabled-color: var(--myscript-text-web-disabled-color);
                --myscript-common-element-capture-background: var(--myscript-text-web-capture-background);
                --myscript-common-element-button-background: var(--myscript-text-web-button-background);
                --myscript-common-element-button-focus-background: var(--myscript-text-web-button-focus-background);
                --myscript-common-element-button-disabled-background: var(--myscript-text-web-button-disabled-background);
                --myscript-common-element-error-background: var(--myscript-text-web-error-background);
                --myscript-common-element-error: var(--myscript-text-web-error);
                --myscript-common-element-loader: var(--myscript-text-web-loader);

                height: calc(100% - 100px);
            }

            myscript-text-exports[hidden] + myscript-common-element {
                height: 100%;
            }
        </style>
        <myscript-text-exports class="exports" hidden="[[ disableexportpanel ]]" exports="[[ exports ]]" debug="[[ debug ]]" on-changed="_exportChangedListener">
        </myscript-text-exports>
        <myscript-common-element type="TEXT" protocol="[[ protocol ]]" apiversion="[[ apiversion ]]" host="[[ host ]]" usewindowlocation="[[ usewindowlocation ]]" scheme="[[ scheme ]]" applicationkey="[[ applicationkey ]]" hmackey="[[ hmackey ]]" triggerdelay="[[ triggerdelay ]]" processdelay="[[ processdelay ]]" ondemand="[[ ondemand ]]" debug="[[ debug ]]" configuration="{{ configuration }}" editor="{{ editor }}" exports="{{ exports }}" initialized="{{ initialized }}" unloaded="[[ commonunloaded ]]" pencolor="[[ pencolor ]]" penwidth="[[ penwidth ]]" penstyle="[[ penstyle ]]" penstyleclasses="[[ penstyleclasses ]]" themecolor="[[ themecolor ]]" themewidth="[[ themewidth ]]" theme="[[ commontheme ]]" canclear="[[ canclear ]]" canredo="[[ canredo ]]" canundo="[[ canundo ]]" idle="[[ idle ]]" disableautoreconnect="[[ disableautoreconnect ]]" disablecontrols="[[ disablecontrols ]]" disableclearcontrol="[[ disableclearcontrol ]]" disableundoredocontrol="[[ disableundoredocontrol ]]" disableconvertcontrol="[[ disableconvertcontrol ]]" usepointerlisteners="[[ usepointerlisteners ]]" touch-action="[[&nbsp;touch-action ]]">
        </myscript-common-element>
`;
  }

  static get is() {
    return 'myscript-text-web';
  }

  /**
   * Fired when editor is idle.
   * @event idle
   */

  /**
   * Fired when editor is loaded.
   * @event loaded
   */

  /**
   * Fired when undo is triggered.
   * @event undo
   */

  /**
   * Fired when redo is triggered.
   * @event redo
   */

  /**
   * Fired when clear is triggered.
   * @event clear
   */

  /**
   * Fired when export is triggered.
   * @event export
   */

  /**
   * Fired when conversion is triggered.
   * @event convert
   */

  /**
   * Fired when editor state changed.
   * @event changed
   */

  /**
   * Fired when export is done.
   * @event exported
   */

  /**
   * Fired when conversion is done.
   * @event converted
   */

  /**
   * Fired on error.
   * @event error
   */

  static get properties() {
    return {
      // ----------------------------------------------------------------------------------------------
      // The following section is a recopy of myscript-common-element attributes
      // Polymer documentation generation prevent from reusing attributes from another element.
      // ----------------------------------------------------------------------------------------------
      /**
           * The current recognition protocol (WEBSOCKET or REST). We strongly recommend using WEBSOCKET.
           */
      protocol: {
        type: String,
        reflectToAttribute: true,
        value: 'WEBSOCKET'
      },
      /**
           * Scheme to use to connect to MyScript Cloud or Server. (https or http)
           */
      scheme: {
        type: String,
        reflectToAttribute: true,
        value: 'https'
      },
      /**
           * The current recognition service host.
           */
      host: {
        type: String,
        reflectToAttribute: true,
        value: 'cloud.myscript.com'
      },
      /**
           * Use if host and scheme should be set using window.location
           */
      usewindowlocation: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * Cloud API version to use.
           */
      apiversion: {
        type: String,
        reflectToAttribute: true,
        value: 'V4'
      },
      /**
           * Delay without any user input before asking for recognition, only use in REST mode.
           */
      triggerdelay: {
        type: Number,
        reflectToAttribute: true,
        value: 2000
      },
      /**
           * Delay without any recognition result received before processing the last one received, only use in WEBSOCKET mode.
           */
      processdelay: {
        type: Number,
        reflectToAttribute: true,
        value: 1000
      },
      /**
           * True if export should be done on-demand, false otherwise
           */
      ondemand: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * The recognition timeout, only use in REST mode.
           */
      timeout: {
        type: Number,
        reflectToAttribute: true,
        value: 2000
      },
      /**
           * Application key to use for recognition on MyScript handwriting recognition server.
           * You have to create your own MyScript Developer account at http://dev.myscript.com and then generate your application key at http://cloud.myscript.com. See the Developer Guide to learn how to register.
           * Warning: This parameter is mandatory and its value should be a string.
           */
      applicationkey: {
        type: String,
        reflectToAttribute: true
      },
      /**
           * HMAC key to use for recognition on MyScript handwriting recognition server.
           * You have to create your own HMAC key corresponding to your own application key in your account at http://cloud.myscript.com.
           * Warning: This parameter may be mandatory if HMAC signature security is enabled for your application. The value should be a string.
           */
      hmackey: {
        type: String,
        reflectToAttribute: true
      },
      /**
           * Properties to set when you wish to set attributes in javascript. unloaded attributes should be removed once all properties are set.
           * (see examples/programmatic_init.html for a better understanding)
           */
      unloaded: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      /**
           * @private
           */
      commonunloaded: {
        type: Boolean,
        computed: '_computeCommonUnloaded(unloaded)'
      },
      /**
           * True if editor is initialized
           */
      initialized: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      /**
           * The underlying editor created with MyScriptJS. This could allow to access more advanced properties. Mostly used for automatic testing currently.
           */
      editor: {
        type: Object,
        notify: true
      },
      /**
           * Set the additional configuration used to feed MyScript editor (Structure of object as defined in MyScriptjs MyScriptJSOptions.js file)
           * Options values are taken into account when myscript-common-element is attached to the dom and when detached is set to false.
           * Options values are not reflected to myscript-common-element attributes plus attributes values are always taken into account before configuration values (see examples/programmatic_init.html for a better understanding).
           */
      configuration: {
        type: Object,
        notify: true
      },
      /**
           * Pen color (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
           */
      pencolor: {
        type: String,
        reflectToAttribute: true
      },
      /**
           * Pen width in mm (no other unit is supported yet)
           */
      penwidth: {
        type: Number,
        reflectToAttribute: true
      },
      /**
           * Set the additional penStyle used to feed MyScript editor (Structure of object as defined in MyScriptJS DefaultPenStyle.js file)
           */
      penstyle: {
        type: Object,
        notify: true
      },
      /**
           * Pen style classes
           */
      penstyleclasses: {
        type: String,
        value: '',
        notify: true
      },
      /**
           * Main color used by theme  (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
           */
      themecolor: {
        type: String,
        value: '#1580CD',
        reflectToAttribute: true
      },
      /**
           * Width of strokes and primitives in mm (no other unit is supported yet)
           */
      themewidth: {
        type: Number,
        value: 1,
        reflectToAttribute: true
      },
      /**
           * font-family used to render text conversion
           */
      fontfamily: {
        type: String,
        value: 'Open Sans',
        reflectToAttribute: true
      },
      /**
           * font-size used to render text conversion
           */
      fontsize: {
        type: Number,
        value: 10.0,
        reflectToAttribute: true
      },
      /**
           * Set the additional theme used to feed MyScript editor (Structure of object as defined in MyScriptJS DefaultTheme.js file)
           */
      theme: {
        type: Object,
        notify: true
      },
      /**
           * @private
           */
      commontheme: {
        type: Object,
        computed: '_computeCommonTheme(theme, fontfamily, fontsize)'
      },
      /**
           * True if undo is available
           * @private
           */
      canundo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * True if redo is available
           * @private
           */
      canredo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * True if there is something to clear
           * @private
           */
      canclear: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * If set to true, disable the autoReconnect.
           */
      disableautoreconnect: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        notify: true
      },
      /**
           * If set to true, hide the buttons (Trash, Undo, Redo).
           */
      disablecontrols: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        notify: true
      },

      /**
           * True if the undo/redo feature is disabled, false otherwise
           */
      disableundoredocontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * True if the clear feature is disabled, false otherwise
           */
      disableclearcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * True if the typeset feature is disabled, false otherwise
           */
      disableconvertcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * True if pointer events listeners is used, false otherwise
           */
      usepointerlisteners: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      //------------------------------------------------------------------------------
      //                 End of recopy
      // -----------------------------------------------------------------------------
      /**
           * True if we want to use always connected mode, false otherwise
           */
      alwaysconnected: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * If set to true, disable the guide lines
           */
      disableguides: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
           * True if smart guide is disabled, false otherwise.
           */
      disablesmartguide: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * True if smart guide fade out is enabled, false otherwise.
           */
      enablesmartguidefadeout: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * Duration of the fade out animation in milliseconds.
           */
      smartguidefadeoutduration: {
        type: Number,
        value: 10000,
        reflectToAttribute: true,
        notify: true
      },
      /**
           * If set to true, lexical knowledge (LK) is added to current LK, false otherwise
           */
      nolktext: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
           * Name of the custom resources to be used
           */
      customresources: {
        type: Array,
        value: [],
        reflectToAttribute: true
      },
      /**
           * If set to true, hide the export panel.
           */
      disableexportpanel: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
           * The recognition language used by the recognition process.
           */
      language: {
        type: String,
        notify: true,
        reflectToAttribute: true,
        value: 'en_US'
      },
      /**
           * Text export types (text/plain, ...).
           */
      mimetypes: {
        type: String,
        value: 'text/plain,application/vnd.myscript.jiix',
        reflectToAttribute: true
      },
      /**
           * The text input mode to use (CURSIVE, ISOLATED, SUPERIMPOSED or VERTICAL).
           */
      textinputmode: {
        type: String,
        value: 'CURSIVE',
        reflectToAttribute: true
      },
      /**
           * The resultdetail is an entry property that conditioning result depth output. To use (TEXT, WORD or CHARACTER).
           */
      resultdetail: {
        type: String,
        value: 'WORD',
        reflectToAttribute: true
      },
      /**
           * The content types to use for the recognition.
           */
      contenttypes: {
        type: Array,
        value: []
      },
      /**
           * The subset knowledges to use for the recognition.
           */
      subsetknowledges: {
        type: Array,
        value: []
      },
      /**
           * The user lk words to use for the recognition.
           */
      userlkwords: {
        type: Array,
        value: []
      },
      /**
           * List of user resources to use for recognitions. Theses user resources have to be attached to the user account where application is declare.
           */
      userresources: {
        type: Array,
        value: []
      },
      /**
           * The size of the candidate lists that will be provided at the text level in the recognition result.
           * This value must be between `1` and `20`.
           */
      textcandidatelistsize: {
        type: Number,
        value: 1,
        reflectToAttribute: true
      },
      /**
           * The size of the candidate lists that will be provided at the word level in the recognition result.
           * This value must be between `1` and `20`.
           * You can't set a wordCandidateListSize > 0 if depth is not set to WORD or CHARACTER
           */
      wordcandidatelistsize: {
        type: Number
      },
      /**
           * The size of the candidate prediction lists that will be provided at the word level in the recognition result.
           * This value must be between `0` and `20`.
           */
      wordpredictionlistsize: {
        type: Number,
        value: 0
      },
      /**
           * The size of the candidate completion lists that will be provided at the word level in the recognition result.
           * This value must be between `0` and `20`.
           */
      wordcompletionlistsize: {
        type: Number,
        value: 0
      },
      /**
           * The size of the candidate lists that will be provided at the character level in the recognition result.
           * This value must be between `1` and `20`.
           * You can't set a characterCandidateListSize > 0 if depth is not set to CHARACTER
           */
      charactercandidatelistsize: {
        type: Number
      },
      /**
           * Property that controls the out of lexicon match.
           */
      enableoutoflexicon: {
        type: Boolean,
        value: false
      },
      /**
           * Property that tells the recognizer to detect the candidates that differ only in case and return the best candidate of that lot.
           */
      discardcasevariations: {
        type: Boolean,
        value: false
      },
      /**
           * Property that tells the recognizer to detect the candidates that differ only in accentuation and return the best candidate of that lot.
           */
      discardaccentuationvariations: {
        type: Boolean,
        value: false
      },
      /**
           * Glyphdistortion is only valid with ISOLATED mode
           *
           * The value of the <code>GlyphDistortion</code> property that controls the amount of glyph distortion.
           * A value between <code>0</code> and <code>255</code>.
           *
           * <code>0</code> means no distortion.
           * <code>255</code> means maximum supported distortion.
           */

      glyphdistortion: {
        type: Number
      },
      /**
           * Attach a digital ink tagger to the recognizer
           */
      enabletagger: {
        type: Boolean,
        value: false
      },
      /**
           * SpellingDistortion is only valid with ISOLATED mode
           *
           * The value of the <code>SpellingDistortion</code> property that controls the amount of spelling distortion.
           * A value between <code>0</code> and <code>255</code>.
           *
           * <code>0</code> means no distortion.
           * <code>255</code> means maximum supported distortion.
           */
      spellingdistortion: {
        type: Number
      },
      /**
           * Exports.
           * @type {Object<String, Object>} Attributes depends on recognition type already configured.
           */
      exports: {
        type: Object,
        notify: true
      },
      /**
           * The export rawResult
           */
      rawresult: {
        type: Object,
        notify: true
      },
      /**
           * The recognition result selected candidate label
           */
      resultlabel: {
        type: String,
        notify: true
      },
      /**
           * The recognition result candidates
           * @type {Array<{label: String, flags: Array<String>}>}
           */
      candidates: {
        type: Array,
        notify: true
      },
      /**
           * True if component is idle
           */
      idle: {
        type: Boolean,
        value: true,
        notify: true
      },
      /**
           * True to display console output, false otherwise.
           */
      debug: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      'touch-action': {
        type: String,
        value: 'initial'
      }
    };
  }

  static _generateTextTheme(theme, fontfamily, fontsize) {
    // FIXME: find a way to do a proper deep merge
    const stylesheet = Object.assign({}, theme);
    if (!stylesheet['.text']) {
      stylesheet['.text'] = {};
    }
    if (fontfamily) {
      stylesheet['.text']['font-family'] = fontfamily;
    }
    if (fontsize) {
      stylesheet['.text']['font-size'] = fontsize;
    }
    return stylesheet;
  }

  static _generateTextConfiguration(configuration, language, mimetypes, alwaysconnected, disableguides, disablesmartguide, enablesmartguidefadeout, smartguidefadeoutduration, nolktext, customresources, textinputmode, resultdetail, contenttypes, subsetknowledges, userlkwords, userresources, textcandidatelistsize, wordcandidatelistsize, wordpredictionlistsize, wordcompletionlistsize, charactercandidatelistsize, enableoutoflexicon, discardcasevariations, discardaccentuationvariations, glyphdistortion, enabletagger, spellingdistortion) {
    // FIXME: find a way to do a proper deep merge
    const conf = Object.assign({}, configuration);
    if (!conf.recognitionParams) {
      conf.recognitionParams = {};
    }
    if (!conf.recognitionParams.v3) {
      conf.recognitionParams.v3 = {};
    }
    if (!conf.recognitionParams.v3.textParameter) {
      conf.recognitionParams.v3.textParameter = {};
    }
    if (!conf.recognitionParams.v3.textParameter.textProperties) {
      conf.recognitionParams.v3.textParameter.textProperties = {};
    }
    if (!conf.recognitionParams.v4) {
      conf.recognitionParams.v4 = {};
    }
    if (!conf.recognitionParams.v4.text) {
      conf.recognitionParams.v4.text = {};
    }
    if (!conf.recognitionParams.v4.text.guides) {
      conf.recognitionParams.v4.text.guides = {};
    }
    if (language) {
      conf.recognitionParams.v3.textParameter.language = language;
      conf.recognitionParams.v4.lang = language;
    }
    if (mimetypes) {
      conf.recognitionParams.v4.text.mimeTypes = mimetypes.split(',');
    }
    if (alwaysconnected !== undefined) {
      conf.recognitionParams.v4.alwaysConnected = alwaysconnected;
    }
    if (disableguides !== undefined) {
      conf.recognitionParams.v4.text.guides.enable = !disableguides;
    }
    if (disablesmartguide !== undefined) {
      conf.recognitionParams.v4.text.smartGuide = !disablesmartguide;
    }
    if (!conf.recognitionParams.v4.text.smartGuideFadeOut) {
      conf.recognitionParams.v4.text.smartGuideFadeOut = {};
    }
    if (enablesmartguidefadeout !== undefined) {
      conf.recognitionParams.v4.text.smartGuideFadeOut.enabled = enablesmartguidefadeout;
    }
    if (smartguidefadeoutduration) {
      conf.recognitionParams.v4.text.smartGuideFadeOut.duration = smartguidefadeoutduration;
    }
    if (!conf.recognitionParams.v4.text.configuration) {
      conf.recognitionParams.v4.text.configuration = {};
    }
    if (customresources) {
      conf.recognitionParams.v4.text.configuration.customResources = customresources;
      conf.recognitionParams.v4.text.configuration.addLKText = !nolktext;
    }
    if (textinputmode) {
      conf.recognitionParams.v3.textParameter.textInputMode = textinputmode;
    }
    if (resultdetail) {
      conf.recognitionParams.v3.textParameter.resultDetail = resultdetail;
    }
    if (contenttypes) {
      conf.recognitionParams.v3.textParameter.contentTypes = contenttypes;
    }
    if (subsetknowledges) {
      conf.recognitionParams.v3.textParameter.subsetKnowledges = subsetknowledges;
    }
    if (userlkwords) {
      conf.recognitionParams.v3.textParameter.userLkWords = userlkwords;
    }
    if (userresources) {
      conf.recognitionParams.v3.textParameter.userResources = userresources;
    }
    if (textcandidatelistsize) {
      conf.recognitionParams.v3.textParameter.textProperties.textCandidateListSize = textcandidatelistsize;
    }
    if (wordcandidatelistsize) {
      conf.recognitionParams.v3.textParameter.textProperties.wordCandidateListSize = wordcandidatelistsize;
    }
    if (wordpredictionlistsize) {
      conf.recognitionParams.v3.textParameter.textProperties.wordPredictionListSize = wordpredictionlistsize;
    }
    if (wordcompletionlistsize) {
      conf.recognitionParams.v3.textParameter.textProperties.wordCompletionListSize = wordcompletionlistsize;
    }
    if (charactercandidatelistsize) {
      conf.recognitionParams.v3.textParameter.textProperties.characterCandidateListSize = charactercandidatelistsize;
    }
    if (enableoutoflexicon) {
      conf.recognitionParams.v3.textParameter.textProperties.enableOutOfLexicon = enableoutoflexicon;
    }
    if (discardcasevariations) {
      conf.recognitionParams.v3.textParameter.textProperties.discardCaseVariations = discardcasevariations;
    }
    if (discardaccentuationvariations) {
      conf.recognitionParams.v3.textParameter.textProperties.discardAccentuationVariations = discardaccentuationvariations;
    }
    if (glyphdistortion) {
      conf.recognitionParams.v3.textParameter.textProperties.glyphDistortion = glyphdistortion;
    }
    if (enabletagger) {
      conf.recognitionParams.v3.textParameter.textProperties.enableTagger = enabletagger;
    }
    if (spellingdistortion) {
      conf.recognitionParams.v3.textParameter.textProperties.spellingDistortion = spellingdistortion;
    }
    return conf;
  }

  _buildConfiguration() {
    if (this.disablesmartguide === false && this.apiversion !== 'V3' && this.protocol !== 'REST') {
      this.disableconvertcontrol = true;
      this.disableclearcontrol = true;
      this.disableexportpanel = true;
    } else if (this.apiversion === 'V3' || this.protocol === 'REST') {
      this.disableconvertcontrol = true;
    }
    return MyScriptTextWeb._generateTextConfiguration(
      this.configuration,
      this.language,
      this.mimetypes,
      this.alwaysconnected,
      this.disableguides,
      this.disablesmartguide,
      this.enablesmartguidefadeout,
      this.smartguidefadeoutduration,
      this.nolktext,
      this.customresources,
      this.textinputmode,
      this.resultdetail,
      this.contenttypes,
      this.subsetknowledges,
      this.userlkwords,
      this.userresources,
      this.textcandidatelistsize,
      this.wordcandidatelistsize,
      this.wordpredictionlistsize,
      this.wordcompletionlistsize,
      this.charactercandidatelistsize,
      this.enableoutoflexicon,
      this.discardcasevariations,
      this.discardaccentuationvariations,
      this.glyphdistortion,
      this.enabletagger,
      this.spellingdistortion
    );
  }

  _exportChangedListener(event) {
    this.logger.trace('candidates ' + event.type + ' event intercepted', event);
    this._manageExports(event, this);
    this.dispatchEvent(new CustomEvent('exported', {
      detail: event.detail
    }));
  }

  constructor() {
    super();
    this.logger = MyScript.LoggerConfig.getLogger('text-web');
  }

  connectedCallback() {
    super.connectedCallback();
    this.logger.setLevel(this.debug ? 'DEBUG' : 'ERROR', false);
    this.configuration = this._buildConfiguration(); // Build default configuration to use in common element
    this.logger.info('attached');
  }

  //-----------------------------------------------------------------------
  // ---------  Wrapping of myscript-common-element  methods    ------------
  //-----------------------------------------------------------------------
  /**
   * Clear all context
   */
  clear() {
    if (this.editor) {
      this.editor.clear();
    }
  }

  /**
   * Undo action, and launch recognition if timeout is set
   */
  undo() {
    if (this.editor) {
      this.editor.undo();
    }
  }

  /**
   * Redo action, and launch recognition if timeout is set
   */
  redo() {
    if (this.editor) {
      this.editor.redo();
    }
  }

  /**
   * Launch export
   */
  export_() {
    if (this.editor) {
      this.editor.export_();
    }
  }

  /**
   * Import content
   * @param {Blob|*} data Data to import
   * @param {String} [mimetype] Mimetype of the data, needed if data is not a Blob
   */
  import_(data, mimetype) {
    if (this.editor) {
      this.editor.import_(data, mimetype);
    }
  }

  /**
   * Send multiple strokes at the same time also call batch mode.
   * @param {{events: Array<{gesture: Boolean, pointerType: String, pointerId: Integer, x: Array<Floats>, y: Array<Floats>, t: Array<Floats>}>}} events to process (strokes)
   * Depending of of your users writes the strokes you may or may not activate the gestures. <code>t</code> attribute is optional in the set of strokes but it is highly recommended to pass it for better accuracy.
   *
   * Example of input :
   * ````{
   *      "events": [{
   *      "pointerType": "PEN",
   *      "pointerId": 1,
   *      "x": [273, 278, 281],
   *      "y": [121, 128, 133],
   *      "t": [3185.7900000000004, 3213.8150000000005, 3222.5350000000003]
   *      },{
   *      "pointerType": "PEN",
   *      "pointerId": 1,
   *      "x": [173, 178, 181],
   *      "y": [221, 228, 233],
   *      "t": [6185.7900000000004, 6213.8150000000005,6222.5350000000003]
   *      }]
   *     }
   * ````
   */
  pointerEvents(events) {
    if (this.editor) {
      this.editor.pointerEvents(events);
    }
  }

  /**
   * Launch convert
   */
  convert() {
    if (this.editor) {
      this.editor.convert();
    }
  }

  /**
   * Return the stats allowing to monitor what ink size is send to the server.
   * Stats objects format {strokesCount : 0, pointsCount : 0, byteSize : 0, humanSize : 0, humanUnit : 'BYTE'} humanUnit could have the values BYTE, BYTES, KiB, MiB
   */
  getStats() {
    return this.editor.getStats();
  }

  _computeCommonUnloaded(unloaded) {
    this.logger.trace('unloaded changed', unloaded);
    if (unloaded === false) {
      this.configuration = this._buildConfiguration();
    }
    return unloaded;
  }

  _computeCommonTheme(theme, fontfamily, fontsize) {
    return MyScriptTextWeb._generateTextTheme(theme, fontfamily, fontsize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.logger.info('detached');
  }

  _manageExports(event) {
    this.rawresult = {};
    this.resultlabel = '';
    this.candidates = [];
    if (event.detail) {
      if (event.detail.exports && event.detail.exports.TEXT) {
        this.resultlabel = event.detail.exports.TEXT;
      }
      if (event.detail.rawResult &&
              event.detail.rawResult.result &&
              event.detail.rawResult.result.textSegmentResult &&
              event.detail.rawResult.result.textSegmentResult.candidates) {
        this.rawresult = event.detail.rawResult;
        this.candidates = this.rawresult.result.textSegmentResult.candidates;
      }
    }
  }

  _displayExports(hideExports, unloaded) {
    // Common element should not be attached if the unload attribute of myscript-math-web element is set to true and if he is not already connected to the dom.
    return !hideExports && (!unloaded || unloaded === true);
  }
}

customElements.define(MyScriptTextWeb.is, MyScriptTextWeb);
