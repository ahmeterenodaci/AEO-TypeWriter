# AEO-TypeWriter
AEO Typewriter is a jQuery plugin for "typewriter" effect.
<br>
<a href="https://ahmeterenodaci.github.io/AEO-TypeWriter/">Demo</a>
</br>
## Usage

#### Include jQuery
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

#### Include plugin's Js and Css:
```html
<script src="js/aeo-typewriter.js"></script>
<link rel="stylesheet" href="css/aeo-style.css">
```

#### You can also use this for a quick start
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://ahmeterenodaci.github.io/AEO-TypeWriter/js/aeo-typewriter.js"></script>
<link rel="stylesheet" href="https://ahmeterenodaci.github.io/AEO-TypeWriter/css/aeo-style.css">
```


##### Example 1 (with tw-text attribute)
```html, js,javascript
<div id="example1" tw-text="Hello World!"></div>
<script>
  $("#example1").typewriter();
</script>
```

##### Example 2 (with tw-text attribute)
```html, js,javascript
<div id="example2" tw-text="Hello World!"></div>
<script>
  $("#example2").typewriter({
      waitingTime: 1000,
      delay: 150,
      hide: 1500,
      cursor: true,
  });
</script>
```

##### Example 3 (without tw-text attribute)
```html, js,javascript
<div id="example3"></div>
<script>
  $("#example3").typewriter({
      text: "Hello World!",
      waitingTime: 1000,
      delay: 150,
      hide: 1500,
      cursor: true,
  });
</script>
```
</br>

## Options
  | Options | Type | Description | Default |
  | --- | --- | --- | --- |
  | text | String | The text that appears with typewriter effect | tw-text attribute |
  | delay | int | Delay time between each letter | 150 |
  | waitingTime | int | The time in miliseconds before start | 1000 |
  | cursor | Boolean | Do you want cursor? | false |
  | hide | int | The time in miliseconds before hiding | 0 (Don't hide) |
  
</br>

## Showcase
<a href="https://ahmeterenodaci.github.io/">ahmeterenodaci/me</a>
</br>
<a href="https://personboxes.com/">Personboxes</a>
</br></br>
**Let me know if you use this plugin. I'll add it here :)**
</br>

## Hey!
 New idea or improvement? Something not working right? Open an Issue. 

