import BoardCardUI from "./BoardCard.presenter";

interface IBoardCardProps {
  data: any;
}

const BoardCard = (props: IBoardCardProps) => {
  return <BoardCardUI data={props.data} />;
};
export default BoardCard;
