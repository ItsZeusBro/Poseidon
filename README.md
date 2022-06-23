# Poseidon
### An Abstract Datatype Syntax Plugin
![download](https://user-images.githubusercontent.com/107733608/175427602-2780fbff-154b-480a-9cd8-462d5e5fcea1.jpg)

### It was ready for this:
We wanted a way to abstract away the implementation details to something that was already practically there from an interface perspective. Abstract directives for these data types, like push(), pop(), etc., are well understood, and are ready for a syntax that is seperate from any underlying language.

Poseidon Plugins will give you the implementation of choice that works with the Poseidon/Hydra Syntax features of this plugin.

Naturally, Abstract Datatypes are collections of various sorts with different interfaces. Each of these Abstract Datatypes are Poseidon Syntax Plugins.
Some plugins natuarally demand enough attention to call themselves eco-system plugins. This is one of these. Poseidon uses the Hydra Ecosystem Plug Library. This enables you to create highly integratable and familiar plug architectures, with high code reuse.


### What the Syntax might look like:
    {
        @ some/path/to/data.poseidon as data

        hydra:{
            objName:{
                  plugin: poseidon
                  type: class,
                  props:{
                    someStack: poseidon.Stack,
                  },
                  methods:{
                    init: init(self.someStack, data)
                    push: poseidon.push()
                    pop: poseidon.pop()
                  }
             }

         }
    }
