import { useState } from "react";
import Modal from "./Modal.jsx";
import "./modal.css";
const ModalTest = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        className="custom-modal-show-button"
        style={show ? { display: `none` } : { display: "block" }}
        onClick={() => {
          setShow(!show);
        }}
      >
        Open Modal
      </button>
      {show && (
        <Modal
          key={crypto.randomUUID()}
          show={show}
          setShow={setShow}
          header={"Join Our Organization Now!"}
          body={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, error magni fugiat incidunt dolorum placeat iste corrupti, adipisci nostrum eos repellat eaque ullam ratione nisi repellendus nulla sequi. Aspernatur, minima.
    Ipsum qui debitis pariatur deleniti numquam iusto hic consequatur illo nostrum, eveniet quaerat libero voluptatem voluptatibus doloremque et nam fugit aliquam mollitia dicta ut nulla! Vero doloribus dolor necessitatibus vitae?
    Consectetur voluptate minus, ut voluptates placeat pariatur, eaque animi ipsum, mollitia minima inventore? Voluptas officia quos, ad porro cum consequuntur quod. Aut, quibusdam totam molestias nulla voluptates velit neque quae.
    Magni praesentium quia voluptas nobis eveniet beatae, deserunt ducimus eius quidem animi laboriosam dolor veniam iure fugit delectus dolorem saepe cum inventore? Officia, necessitatibus eius minima tenetur numquam magnam est?
    Assumenda atque quas perspiciatis ab soluta quia recusandae quae dolores quos ducimus. Quasi perspiciatis fugiat ut harum exercitationem, repellendus nesciunt in, eos iure beatae id quam, ab eveniet corporis explicabo!
    Ab quisquam pariatur dolores laudantium ducimus repellendus placeat iusto possimus atque eos? Unde maiores esse molestiae aut quis, ex beatae hic. Quam laboriosam iusto neque voluptatibus? Illo recusandae corporis doloremque?
    Officia dicta accusamus voluptatibus enim, minima ab ducimus excepturi? At repellendus, quam molestiae necessitatibus, nemo earum voluptatibus, possimus delectus doloribus cupiditate ipsum omnis dolorem obcaecati! Aperiam, deleniti molestias? In, nostrum.
    Ea amet illo perspiciatis delectus deserunt, neque eligendi repellat velit porro nihil magnam corrupti unde optio soluta ut maiores placeat cupiditate recusandae totam consequuntur, nesciunt fugiat non ipsa! Nam, cumque!
    Nulla praesentium, voluptatum repellat dolores modi tempore aliquam provident doloremque! Eius dolorum placeat culpa voluptates in, consequatur, ad reprehenderit dolores eligendi, iste aliquid unde quasi debitis fuga odit quia doloribus.
    Ex autem, iure voluptatem ut quos eius doloremque optio. Quisquam ratione quasi, porro vitae nobis eligendi laborum excepturi quas earum harum modi consectetur ipsam, dolorum officiis hic sed placeat esse.`}
          footer={"© 2023 United Nations. All rights reserved."}
        />
      )}
    </div>
  );
};

export default ModalTest;
