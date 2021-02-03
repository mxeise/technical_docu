Vue.component("code-block", {
  template: `
        <div class="bg-black bg-opacity-75 p-6 rounded-xl">
          <code class="language-html">
            <div class="flex flex-grow">
              <span class="code_punkt"><</span>
              <span class="code_tag">p&nbsp;</span>
              <span class="code_classname">class</span>
              <span class="code_punkt">="</span>
              <span class="code_class">
                grid
                <span class="code_class_bg">grid-cols-3</span>
                gap-4
              </span>
              <span class="code_punkt">"</span>
              <span class="code_punkt">></span>
              <span class="code_punkt"><</span>
              <span class="code_punkt">/</span>
              <span class="code_tag">p</span>
              <span class="code_punkt">></span>
              <span class="code_punkt"><</span>
              <span class="code_tag">p&nbsp;</span>
            </div>
          </code>
        </div>
    `,
});

Vue.component("nav-bar", {
  template: `
      <nav id="nav" class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 md:flex-">
            <div class="flex items-center justify-center">
              <div src="" id="header-img" class="rounded-full h-10 w-10 bg-gradient-to-tr from-green-300 to-blue-600 hover:from-pink-500 hover:to-yellow-500"></div>
            </div>
          </div>
          <div class="flex flex-auto justify-left">
            <div class="flex pl-12 text-gray-900 text-xl font-bold">
            <header>
              <a href="#" class="nav-link">Technical Documentation</a>
            </header>              
            </div>
            </div>
          </div>
        </div>
      </nav>
      `,
});

Vue.component("sample-text", {
  template: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    `,
});

var app = new Vue({
  el: "#app",
});

var app2 = new Vue({
  el: "#nav",
});
