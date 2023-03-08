console.log("About to fetch an arrray of images");

const files =
[
    'images/aishi1.png',
    'images/aishi2.png',
    'images/aishi3.png',
    'images/aishi4.png',
    'images/aishi5.png',
    'images/aishi6.png'
];
catcharrayfiles(files)

.then(response =>
    {
    console.log ("yay!");
    })
.catch(error =>
    {
    console.error(error);
    })
async function catcharrayfiles(files)
{
    for(let filename of files)
    {
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width = '200';
        document.body.append(img);
    }
}