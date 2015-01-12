# angular-otobox

> Angular directive for highlighting text parts, a replacement to all mentioning libraries. Written on plain Javascript with no dependency.

**This Angular module is written based on otobox.js from Afshin Mehrabani**

## How to use

It's possible to define as much activators as needed:
```javascript
app.directive('otoboxConfig', function () {
  return {
    controller: function ($scope) {

      $scope.config =  [
        {
          name: "mention.array",
          key: "@",
          customChoice: "false",
          includeKey: "true",
          allowedChars: "[a-zA-Z0-9]+",
          source: "/path/to/users"
        },
        {
          name: "mention.array",
          key: "#",
          customChoice: "true",
          includeKey: "true",
          allowedChars: "[a-zA-Z0-9]+",
          source: "/path/to/tags"
        }
      ]

    }
  }
});

  ```
If there is only one activator for each element, it's possible to define configs as element attributes too:

```javascript

<textarea
    otobox="mention.array"
    otobox-key="@"
    otobox-custom-choice="true"
    otobox-include-key="true"
    otobox-allowed-chars="[a-zA-Z0-9]+"
    otobox-source="/path/to/users">
  </textarea>
  ```
## Roadmap
- Caching prevoiusly loaded names

## Release History


## Author
**Ali Haghighatkhah**

- [Github](https://github.com/alihaghighatkhah)
- [Personal page](http://colorofweb.com/)

**Special thanks to Afshin Mehrabani**
- [Github](https://github.com/afshinm)

## License
> Copyright (C) 2015 Ali Haghighatkhah (alihaghighatkhah@yahoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.



