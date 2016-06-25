# Relaxo - Documentation
> The HOW to everything.

## HTML Structure
Relaxo only works with a specific HTML structure. You sure are allowed to rename the elements in `source.js` but I wouldn't recommend doing that.

```
<div class="relaxo">
	<div class="relaxo__item" data-velocity-y="0.64" data-velocity-x="0.76">
		<img src="./assets/img/foreground.png" alt>
	</div>

	<div class="relaxo__item" data-velocity-y="0.884" data-velocity-x="1.03">
		<img src="./assets/img/background.png" alt>
	</div>
</div>
```

## JavaScript
The only thing I would suggest, is to bind the `mouseBind` to the parent element, so the `mousemove` function only works over this element and not on the whole page.

If you don't need it, you have to change the script a bit by removing the variable `mousemove` and on line 24 in `source.js` you have to put in `container`.

## What are the available settings?
The settings can only be set inside the HTML with data-attributes.

| setting | description |
| ------- | ----------- |
| data-velocity-y | How far should the element travel on the Y axis. The higher the values, the higher the velocity. |
| data-velocity-x | How far should the element travel on the X axis. The higher the values, the higher the velocity. |

## Question? Issues?
I'm always happy to see feedback in the Issues board on this repository. Feel free to open one, if you find anything. :)

## License
The MIT License
