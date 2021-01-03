Vue.component("code-block", {
  template: `
        <div class="bg-black bg-opacity-75 p-6">'
          <code class="language-html">
            <div class="flex">
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

Vue.component("sample-text", {
  template: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    `,
});

var app = new Vue({
  el: "#app",
});
