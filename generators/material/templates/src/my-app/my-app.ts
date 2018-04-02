import "polymer/polymer.html";
import {customElement, property} from 'taktik-polymer-typescript';
import './<%= projecName %>.html'
/**
 * MyApp main class.
 *
 */
@customElement('<%= projecName %>')
export class <%= projecNameCamelCase %> extends Polymer.Element {


  /**
   * A property call myProperty
   * @type {string}
   */
@property({type: String})
  myProperty: string = 'an application scaffolds with love';
}

