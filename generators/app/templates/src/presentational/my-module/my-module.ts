import "polymer/polymer.html";
import './my-module.html'
import {customElement, property} from 'taktik-polymer-typescript'


/**
 * MyModule class.
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
 * `----my-module-text-color` | Color h2 text | `black`
 *
 */
@customElement('my-module')
export class MyModule extends Polymer.Element {

    /**
     * A property call myProperty
     * @type {string}
     */
    @property({type: String})
    myProperty: string = 'a sub module';
}
