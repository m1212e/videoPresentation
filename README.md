# VideoPresentation


VideoPresentation is a tool for designers and creatives to replace PowerPoint or Slides. It's designed for precise and high quality presentations with a focus on animated slides.
A demo can be found here https://videopresentationdemo.web.app/
# Features
  - Usage of .jpg and .mp4 files as slides
  - Skipping back and forth between slides
  - Freeze Frame at the end of every video

The goal is to make people with animation and design knowledge able to utilize their skills inside a tool like Illustrator, AfterEffects, Resolve or AffinityDesigner to construct their slides and then just export them as a picture or video. All the design will be done in the creative environment you already know about. This tool then just takes your work and puts it into a presentation by simply showing each slide after each other. Videos will be played automatically and will freeze at the end. This way you can create complex animations, split them up into single steps and then play those back at the speed you hold your presentation.

### Tech

At the moment this tool uses vanilla Typescript and simple html tags to work. You just have to spin up a local webserver (for example with Parcel) and you will be good to go.

### Installation and usage
Requires [Node.js](https://nodejs.org/) to run. Just download and install it. Make sure you also install the node package manager (npm) which comes inside the installer you will download.

Install the project by navigating into the folder you downloaded and execute:
```sh
npm install
```
then create a folder named "slides" and put all your slides (videos/images) in there. Name them with numbers for them to appear in the correct order.
  - 1.mp4
  - 60_infoGraphic.jpg
  - 66.jpg
  - 100ImAVideo.mp4

Will result in the correct order like given above.
Then you need to start a local webserver. There are many way to do so, but one is the [Parcel](https://parceljs.org/getting_started.html) bundler.
For installation follow the guide at the link or just run 
```sh
npm install -g parcel-bundler
```
anywhere in your command line.
Now youll be able to run the application. Just type
```sh
parcel ./index.html
```
and visit http://localhost:1234/ to see your presentation running.

### Todos
 - Solving the black flashes between slides
 - Supporting more filetypes
 - Actually making this usable for non devs
