import { Card } from "./Card/Card";

export function Page1({ changePage }) {
  return (
    <div className="productGrid">
      <Card
        imageUrl="https://images.unsplash.com/photo-1504674138570-5fe6671ec5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgyNTc&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 1"
        onClick={() => changePage(3)}
      >
        Delight in our tray of 12 gourmet doughnuts, featuring an exquisite
        assortment of flavors and designs. Savor the perfect blend of classic
        favorites and innovative combinations for a truly indulgent experience.
      </Card>

      <Card
        imageUrl="https://images.unsplash.com/photo-1527904324834-3bda86da6771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgzOTA&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 2"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="https://images.unsplash.com/photo-1527904324834-3bda86da6771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgzOTA&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 3"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>
      <Card
        imageUrl="https://images.unsplash.com/photo-1504674138570-5fe6671ec5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgyNTc&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 4"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="https://images.unsplash.com/photo-1527904324834-3bda86da6771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgzOTA&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 5"
        onClick={() => changePage(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt rerum eum, voluptatibus laborum itaque inventore nihil ipsam
        modi quisquam facilis quos reiciendis suscipit earum. Dolorem quibusdam
        illo quas eius?
      </Card>

      <Card
        imageUrl="https://images.unsplash.com/photo-1527904324834-3bda86da6771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0ODgzOTA&ixlib=rb-4.0.3&q=80&w=400"
        title="Product 6"
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
