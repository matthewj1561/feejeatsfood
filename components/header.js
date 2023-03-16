const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        nav{
            height: 100%;
            width: inherit;
        }
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
            align-content: center;
            flex-wrap: wrap;
            height: 100%
        }
        a {
            color: white;
            text-decoration: none;
            font-size: 20px;
        }
        a:hover {
            color: var(--light-accent);
        }
        #header {
            margin:0;
            width: 100%;
            background-color: var(--dark);
            height: 100px;
            display: flex;
        }
        img {
            width: 125px;
        }
    </style>
    <header id="header">
        <a href="#">
            <img src="../images/logo.png" alt="Site Logo" />
        </a>
        <nav>
            <ul>
                <li><a href="#">Food Blog</a></li>
                <li><a href="#">Map</a></li>
                <li><a href="#">The Authors</a></li>
            </ul>
        </nav>
    </header>`;

// This was new to me, so I added comments to explain what each line does. We will need to do this often in our website.
class CustomHeader extends HTMLElement{
 constructor(){
    // Inherit properties from HTMLElement
    super();
    //  A shadow DOM is created, i.e, this.attachShadow({ mode: 'open'}) and 
    // becomes the encapsulated part of our web component. It keeps our component’s 
    // behaviour independent and from the rest of the Html.
    // You can have your shadow DOM mode closed or open. This means whether you can 
    // access shadow DOM via JavaScript in your components.
    this.attachShadow({ mode: 'open'});
    // Web Components enable us to use shadow DOM, a feature built into the browser. 
    // So if child elements are added to a shadow DOM of a component, they are wrapped inside a shadow root.
    // Example
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
 } 
 /* 
 There are four callback methods defined inside the custom elements. They enable the code to run when events occur in an element.

Let us take a look at some of the callback methods:

connectedCallback: is called when the component is inserted into an HTML document’s DOM.
disconnectedCallback: is called when the element is removed from the document’s DOM.
adoptedCallback: is called when the component is moved to another HTML document.
attributeChangedCallback: is when the attributes of the component are changed.
 */
// Example
//  connectedCallback(){
//    this.h3 = this.getAttribute("name")
//    this.render();
//  }

//  render(){
//    this.h3;
//  }
}
window.customElements.define('custom-header', CustomHeader);