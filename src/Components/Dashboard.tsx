import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import { ActionType } from "../Reducer/Reducer";
import { DashBoardDiv } from "../Styled-Components/Styled-Components";

function Dashboard() {
  let { state, dispatch } = useContext(Context);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"
        );
        dispatch({
          type: ActionType.HANDLE_DATA_FETCH,
          payload: { fetchedData: data.data },
        });
      } catch (error) {
        dispatch({
          type: ActionType.MODAL_STATE,
          payload: {
            modal: {
              openModal: true,
              messageTitle: "😔 Some error occured while fetching data.",
              message: `${error}`,
            },
          },
        });
      }
    }
    fetch();
  }, [dispatch]);

  return (
    <DashBoardDiv>
      {state.fetchedData.map((data: any) => (
        <section key={data.id}>
          <h3>{data.title.rendered}</h3>
          <h5>{data.date}</h5>
          <img src={data.jetpack_featured_media_url} alt="img not available" />
          <p dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
        </section>
      ))}
    </DashBoardDiv>
  );
}

export default Dashboard;
