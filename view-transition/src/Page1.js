import { Card } from "./Card/Card";

export function Page1({ changePage }) {
  return (
    <div className="productGrid">
      <Card
        imageUrl="/media/doughnut box 6.png"
        title="Sprinkle Pack 6"
        onClick={() => changePage(3)}
      >
        Delight in our tray of 6 gourmet doughnuts, featuring an exquisite
        assortment of flavors and designs. Savor the perfect blend of classic
        favorites and innovative combinations for a truly indulgent experience.
      </Card>

      <Card
        imageUrl="/media/doughnut box 4.png"
        title="A box of 4 frosted doughnuts"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="/media/doughnut packet 6.png"
        title="A packet of 6 frosted doughnuts"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>
      <Card
        imageUrl="/media/doughnut blueberry.png"
        title="Blueberry doughnut"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="/media/doughnut pink.png"
        title="Pink doughnut"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="/media/doughnut_green.png"
        title="Doughnut with green frosting"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>
    </div>
  );
}
