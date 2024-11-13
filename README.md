<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
  <link rel="stylesheet" href="src/style.css" />
  <title>AI Baby Names Generator</title>
</head>

<body>
  <header>
    <div class="container">
      <h1>AI Baby Names Generator</h1>
    </div>
  </header>

  <div class="grid">
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/150/119/original/istockphoto-1452355975-612x612.jpg?1731409860"
      class="baby-image1">
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/150/120/original/newborn-ideas-and-tips.jpg?1731409883"
      class="baby-image2">
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/150/127/original/a-mother-love-embracing-her-newborn-baby-girl-pure-happiness-generated-by-ai-free-photo.jpg?1731410045"
      class="baby-image3">
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/150/122/original/the_science_of_baby_name_trends_1050x700.jpeg?1731409964"
      class="baby-image4">
  </div>

  <main>
    <div class="baby-name-form">
      <form id="baby-name-form"> <!-- Changed ID here -->
        <input type="text" id="user-instructions" placeholder="Enter your preferences for a baby name..." required
          autocomplete="off" class="baby-name-input" />
          <div class="hint"></div>
          <small>Type the sex of your baby</small>
        <button type="submit" class="submit">Generate Baby Name</button> 

        <div id="baby-name" class="hidden"></div>

      </form>

       

  </main>

  <footer>
    This AI project was coded by
    <a href="https://www.shecodes.io/graduates/153122-tamyra-selvarajan" target="_blank">Tamyra Selvarajan</a> and is
    <a href="https://github.com/tamyra-coder/baby-namegenerator" target="_blank">open-sourced on GitHub</a> and is
    <a href="https://ai-babyname-generator.netlify.app" target="_blank">hosted on Netlify</a>.
  </footer>

  <script src="src/index.js"></script>
</body>

</html>
