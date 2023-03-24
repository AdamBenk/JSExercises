
// BEGIN: code that makes your functions run in both browser and node environment. DO NOT MODIFY
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js
        module.exports = factory();
    } else {
        // Browser
        root.fns = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // END: helper code.
    /**
     * This exercise focuses on classes. As I try to present examples from real life, You'll implement
     * web page components and classes, that would exist in real life applications.
     * Please read the exercises carefully, because they are depending on each other from first to the last one.
     */
    /* --------------------------------------------------------------------------------------------------------- */






    /**
     * Exercise #1
     * difficulty: 1/5
     *
     * Implement a class, that represents a menu item on a webpage, called BaseMenuItem.
     * it has the following properties:
     * - label: string            Contains the text it displays
     * - href: string|undefined   If not undefined, it must contain an URL to a page it should navigate to
     * - className: string        CSS class applied to the menu item
     *
     * The constructor accepts 3 parameters: label, href, className and will set the properties accordingly
     *
     * related:
     * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
     * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
     */
    class BaseMenuItem {
        // finish class here
    }

    /**
     * Exercise #2
     * difficulty: 2/5
     *
     * Implement a class (MenuItem) that extends MenuItem class with the following methods/properties
     * - template: string  it contains the MenuItem html as a string, like the following:
     *
     *    "<li class=\"{{class}}\">a href=\"{{href property}}\">{{label property}}</a></li>"

     * - render() method that accepts no parameter, and returns the html of the menu item filled with
     *   its properties, like this:
     *   if class="main", label = "Home Page" and href = "/home" and template is the one above, render returns:
     *
     *    <li class="main">
     *       <a href="/home">Home Page</a>
     *    </li>
     *
     * As you can see above, {{something}} is a placeholder for menu item properties, and render method replaces these
     * placeholders with the current value of its properties. For the tests to pass, you should keep this way
     * of defining placeholders in template.
     *
     * - constructor method accepts 4 parameters: label, href, class, template. If template is not passed when
     *   constructor called, it will have a default value of the above!
     *   constructor must call the superclass' constructor (to set the properties except template).
     *   constructor(label, href, class, template)
     *
     * Related:
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
     */
    class MenuItem {

    }

    /**
     * Exercise #3
     * difficulty 3/5
     *
     * Write a class that represents a menu on the page, called Menu, and implements the following features:
     *
     * Constructor has 2 parameter:
     *  class: string, it represents the css class that will be applied to the menu
     *  template: string, and it will set the value of the template property of the object. It template is not
     *                    passed, it will have a default value "<ul>{{menuitems}}</ul>"
     * constructor(class, template)
     *
     * it has properties:
     * - class: string            The css class that menu have when rendered
     *
     * - menuitemsPlaceholder: string   the name of the placeholder in the template that will be replaced
     *                            with the menuitems, by default let it be "menuitems"
     *
     * - items: Array<MenuItem>   it is an array of MenuItem Class objects that were added to the list
     *
     * - template: string         the template of the component, that will be rendered to the web page, and put
     *                            the default content :
     *
     *                            "<ul>{{menuitems}}</ul>"
     *
     *                            this will be the menu on the webpage.
     *
     * it implements the following methods:
     * - addItem(item: MenuItem)   adds a new MenuItem to the items array property. If item is not a MenuItem object,
     *                             it console.error() a message and won't add it to the items array
     *
     * - render()                  it renders the template string: it gets the template string, replaces {{menuitems}}
     *                             placeholder with the results of all the items render method
     *                             If menu does not have
     *
     * related:
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes     - default value of properties
     *
     */
    class Menu {

    }

    /**
     * I'll present you an example how these classes are being used:
     *
     * const menu = new Menu("left", "<div class="main-menu">{{menuitems}}</div>")
     *
     * const menuItem1 = new MenuItem("First Page", "/pages/first", "first-page")
     * const menuItem2 = new MenuItem("Second Page", "/pages/second", "second-page")
     * const menuItem2 = new MenuItem("Third Page", "/pages/third", "third-page")
     *
     * menu.addItem(menuItem1)
     * menu.addItem(menuItem2)
     * menu.addItem(menuItem3)
     *
     * let content = menu.render();
     *
     * console.info(content);
     *
     * content will be:
     *
     * <div>
     *     <li class="first-page">
     *         <a href="/pages/first">First Page</a>
     *     </li>
     *     <li class="second-page">
     *         <a href="/pages/second">Second Page</a>
     *     </li>
     *     <li class="third-page">
     *         <a href="/pages/third">Third Page</a>
     *     </li>
     * </div>
     *
     * The line breaks and spacing might be different, i just indented the generated html code
     */

    /**
     * Exercise #4
     * difficulty: 2
     *
     * As you can see, using Menu class is a bit difficult, as it needs to add menuitems one by one
     * So let's create a new class inherited from Menu class, call it ExtendedMenu and it has the same kind of
     * constructor, but it has some new methods:
     *
     * - addItems(items: Array<MenuItem>)   it will add an array of menuitems to the items property. It adds an item
     *                                      only if it's a MenuItem object
     *
     * - setItems(items: Array<MenuItem>)   it overwrites the whole items property with the passed Items parameter
     *
     * - removeItem(pos: number)             removes an item from the items property defined by position (pos)
     *
     * -
     *
     * Use Menu methods if possible, call superclass constructors, etc.
     */
    class ExtendedMenu {

    }

    // DO NOT COMMENT OUT LINES BELOW
    return {
        BaseMenuItem,
        MenuItem,
        Menu,
        ExtendedMenu
    };
}));
