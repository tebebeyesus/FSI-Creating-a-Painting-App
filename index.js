//const painting = document.querySelector('.painting')

const painting = document.querySelector('.painting')
let colorPanels = document.querySelectorAll('.color-choice')
let pickedColor = 'blue'
let button = document.querySelector('button')



for(let r=0;r < colorPanels.length;r++)
{
  let colorPanel = colorPanels[r]
  console.log(colorPanel)
  colorPanel.addEventListener('click', function(e) {
  pickedColor = e.target.getAttribute('id')
  })   
}

painting.addEventListener('click', function(e){
	//console.log(paintColor.style.color)
    e.target.style.backgroundColor =  pickedColor
    pickedPixel = e.target
    console.log('pickcle clicked')
    console.log(pickedPixel)
    //pickedPixel = document.querySelector('.pixel')
})

let allPixels = document.querySelectorAll('.pixel')

for(let v =0; v < allPixels.length; v++)
{
    allPixels[v].addEventListener('dblclick', function(e){
       e.target.style.backgroundColor = 'white'
    })
}

button.addEventListener('click', function()
{ 
    console.log('button clicked')
    for(let v =0; v < allPixels.length; v++)
    {
        allPixels[v].style.backgroundColor = 'white'
    }
}
)



