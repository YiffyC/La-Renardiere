# La renardière
### Keyboard friendly startpage, inspired from DECAUX

![image](https://user-images.githubusercontent.com/22780248/128182738-9bc41ba3-22cf-47a3-a941-ca286c3b02cc.png)

<div align="center">
	<h3><a href="https://bthevenet.heb3.org/home/">Live Demo</a></h3>
</div>

# Usage

|Key|Command|
|:-:|---|
|`h`| Show Help |
|`z` `↑`| Move Up |
|`q` `←`| Move Left |
|`s` `↓`| Move Down |
|`d` `→`| Move Right |
|`Space`| Focus Search |
|`Esc`| Back to Blocks |

# Customization

Inside `style.css`.

Link blocks are inside `index.html`, the syntax for the links is the following:

```html
<td>
	<a href="{URL HERE}" id="{x}">
		<img src="src/{IMAGE HERE}">
		<h3>{NAME HERE}</h3>
		<p>{SUBTEXT HERE}</p>
	</a>
</td>

<!-- Change everything in brackets. -->
```

For the moment, there is only possible to have 8 blocks in 2 lines of 4 blocks, so if you want to add your links, just edit the ones already in there.

To make a new image for the block, the ones I used are 75x75 pixels and 72ppi, and are inside the `src/` folder


## API calling

### Randomword
The `randomword.js` script contains the call of the random word + it's definition. The API used is [Random Word API](https://github.com/mcnaveen/Random-Words-API) from @mcnaveen
![image](https://user-images.githubusercontent.com/22780248/114360178-09091080-9b75-11eb-9513-84af4a77ceb5.png)



### Weather
The Weather API is openweathermaps and is using the current location and does not display weather for a fix location.
```javascript
    function setPosition(position){  
        let latitude = position.coords.latitude;  
        let longitude = position.coords.longitude;  
	};
```
 If you want to use fix location, replace `position.coords.latitude` and `position.coords.longitude` with fixed values instead of calling them from the API. :
 ```javascript
    function setPosition(position){  
        let latitude = 48.856614;  
        let longitude = 2.3522219;  
	};
```

![image](https://user-images.githubusercontent.com/22780248/114360227-14f4d280-9b75-11eb-8564-06b4beeddae1.png)


It will need your openweathermap API key in `weather.js` at line `17` : 
```javascript
const key = "YOURKEY";
```

## Spotify Now Playing Integration
Shows what's currently playing in Spotify. Inspired by the work of [José Manuel Pérez](https://codepen.io/jmperez/pen/MmwObE)
### Usage 
First login with your spotify account by clicking on the fox emoji
![image](https://user-images.githubusercontent.com/22780248/130411157-66d4e2ce-5bf2-4b1b-a6db-4b2255027f37.png)

### Login issues
While login you may encounter issues :

* The popup is not showing : allow popup for the site
* The popup immediately close when it opens : be sure you have no extentions blocking the popup or it's connection. For some reason you can browse in private tab, log in and comming back on normal tab and magic happens


### Remove now playing
If you want to remove the spotify integration, you have to remove `spoty.js` and the following code in `index.html`:

```html
<div class="container">
    <div class="login-container hidden" id="js-login-container">
      <a hrf='https://spotify-player.herokuapp.com/login?scope=user-read-playback-state'><button class="btn btn--login" id="js-btn-login">Login with Spotify</button></a>
    </div>
    <div class="main-container hidden" id="js-main-container"></div>
</div>
```
and :

```html
<script type="text/javascript" src="spoty.js"></script>
<script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch'></script>
<script src='https://spotify-player.herokuapp.com/spotify-player.js'></script>
<script id="rendered-js" >
var mainContainer = document.getElementById('js-main-container'),
loginContainer = document.getElementById('js-login-container'),
loginButton = document.getElementById('js-btn-login'),
background = document.getElementById('js-background');

var spotifyPlayer = new SpotifyPlayer();

var template = function (data) {
  return `
    <div class="main-wrapper">
      <div class="now-playing__img">
        <img src="${data.item.album.images[0].url}">
      </div>
      <div class="now-playing__side">
        <div class="now-playing__name">${data.item.name}</div>
        <div class="now-playing__artist">${data.item.artists[0].name}</div>
        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
        </div>
      </div>
    </div>
    <div class="background" style="background-image:url(${data.item.album.images[0].url})"></div>
  `;
};

spotifyPlayer.on('update', response => {
  mainContainer.innerHTML = template(response);
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    loginContainer.style.display = 'block';
    mainContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
  }
});

loginButton.addEventListener('click', () => {
  spotifyPlayer.login();
});

spotifyPlayer.init();
//# sourceURL=pen.js
    </script>
```




# *Known issues*

* The current tile will stay highlighted when the mouse hovers another tile ![image](https://user-images.githubusercontent.com/22780248/114357539-238dba80-9b72-11eb-825c-fa3132c79035.png)

* Improve mobile browser display

### *Todolist*
* Add weather icon depending of sky status
* Clean code owo
