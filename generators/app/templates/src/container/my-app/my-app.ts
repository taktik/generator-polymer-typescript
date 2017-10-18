import "polymer/polymer.html";
import {Store, Action} from 'redux'
import {ReduxClassConstructor} from "polymer-redux"
import {customElement, property} from 'taktik-polymer-typescript'

import './<%= projecName %>.html'

import {ReduxMixin} from '../../store'
import {MyModule} from '../../presentational/my-module/my-module'
import {MyAPI, getMyAPI} from '../../lib/my-api/my-api'

/**
 * MyApp main class.
 *
 * ### events
 * - document here events throw by this class
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--your mixin` | Add Description | `rgba(29,38,43,0.52)`
 *
 */
@customElement('<%= projecName %>')
export class <%= projecNameCamelCase %> extends ReduxMixin(Polymer.Element) {

  $:{
    subModule: MyModule,
    requestInfo: Element,
  };

  ready(){
    super.ready();
    this.$.subModule.addEventListener('click', ()=>{
      this.loadSubModule();
    })

    this.$.requestInfo.addEventListener('click', ()=>{
      const myApi = getMyAPI();
      myApi.getInfo().then((infos)=> this.items= infos)
    })
  }

  /**
   * A property call myProperty
   * @type {string}
   */
  @property({type: String})
  myProperty: string = 'an application scaffolds with love';

  /**
   * List of key words
   * @type {Array<string>}
   */
  @property({type: Array})
  items:Array<string> = [];

  loadSubModule(){
    import( /* webpackChunkName: "my-moduleLazy" */ '../../presentational/my-module/my-module');
  }
}

