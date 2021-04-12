# La renardière
### Keyboard friendly startpage, inspired from DECAUX

![image](https://user-images.githubusercontent.com/22780248/114354919-23d88680-9b6f-11eb-9907-54f8aa928f2b.png)

<div align="center">
	<h3><a href="https://bthevenet.heb3.org/home/">Live Demo</a></h3>
</div>

### Usage

|Key|Command|
|:-:|---|
|`h`| Show Help |
|`z` `↑`| Move Up |
|`q` `←`| Move Left |
|`s` `↓`| Move Down |
|`d` `→`| Move Right |
|`Space`| Focus Search |
|`Esc`| Back to Blocks |

### Customization

Inside `style.css`.

Link blocks are in lines `69-128` inside `index.html`, the syntax for the links is the following:

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


### API calling

The `randomword.js` script contains the call of the random word + it's definition. The API used is [Random Word API](https://github.com/mcnaveen/Random-Words-API) from @mcnaveen
![image](https://user-images.githubusercontent.com/22780248/114360178-09091080-9b75-11eb-9513-84af4a77ceb5.png)




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

### *Known issues*

* The current tile will stay highlighted when the mouse hovers another tile ![image](https://user-images.githubusercontent.com/22780248/114357539-238dba80-9b72-11eb-825c-fa3132c79035.png)

* Improve mobile browser display

### *Todolist*
* Add weather icon depending of sky status
