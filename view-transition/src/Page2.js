export function Page2({ changePage }) {
  return (
    <>
      <header className="App-header">
        <h1>Page 2</h1>

        <button type="button" onClick={() => changePage(1)}>
          Go to page 1
        </button>
      </header>
      <div>
        <p>
          Once upon a time, in the sunny city of Perth, Western Australia, there
          lived a front-end developer named Anton who worked at Doist. Anton had
          a great passion for two things: doughnuts and CSS.
        </p>
        <p>
          Anton was preparing for a big conference in Oslo, Norway, where he was
          going to present on the future of CSS. This wasn’t his first time in
          Oslo; he had been there once before and had fallen in love with the
          city and its people.
        </p>
        <p>
          To make his presentation stand out, Anton decided to create a
          doughnut-themed presentation to showcase the power and versatility of
          modern CSS techniques.
        </p>
        <p>
          As he prepared for his journey, Anton made sure to pack his favorite
          doughnut-themed attire: a doughnut-patterned tie, doughnut-print
          socks, and even a doughnut-shaped USB stick containing his
          presentation.
        </p>
        <p>
          Upon arrival in Oslo, Anton was greeted by the familiar sights and
          sounds of the bustling city. He headed straight to his favorite local
          doughnut shop to fuel up for his big presentation.
        </p>
        <p>
          The day of the conference arrived, and Anton confidently stepped onto
          the stage, ready to dazzle the audience with his doughnut-inspired CSS
          creations. As he began to speak, the crowd was immediately captivated
          by the colorful, mouth-watering visuals on the screen.
        </p>
        <p>
          Throughout the presentation, Anton demonstrated how CSS could be used
          to create dynamic, responsive designs that resembled various types of
          doughnuts. He showed the audience how to use gradients, animations,
          and even 3D transformations to bring their web designs to life.
        </p>
        <p>
          As Anton wrapped up his talk, the crowd erupted into applause,
          praising his creativity and ingenuity in incorporating his love for
          doughnuts into his work as a front-end developer.
        </p>
        <p>
          With another successful presentation under his belt, Anton spent the
          rest of his time in Oslo enjoying the local culture and, of course,
          indulging in more delicious doughnuts. He returned to Perth with a
          renewed sense of enthusiasm for his work, eager to continue pushing
          the boundaries of CSS and web design.
        </p>
        <p>
          And so, Anton’s doughnut-themed adventure in Oslo came to an end, but
          his passion for front-end development and doughnuts continued to
          thrive, inspiring others to explore the sweet possibilities of CSS.
        </p>
      </div>
      <div className="doughnutdothis">
        <img src="/media/doughnut_bite.png" width="341" height="317" alt="" />
      </div>
    </>
  );
}
