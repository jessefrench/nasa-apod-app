document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=Rgcy5GpMAuUzBbvkECH5rT50p7BHE1gtpmc0PiQO&date=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.media_type === 'image'){
        document.querySelector('iframe').style.display = 'none'
        document.getElementById('bg').style.backgroundImage = `url(${data.hdurl})`
      }else if (data.media_type === 'video'){
        document.querySelector('iframe').style.display = 'block'
        document.querySelector('iframe').src = data.url
      }
      document.getElementById('description').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}