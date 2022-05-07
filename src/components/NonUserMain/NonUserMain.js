import { Fragment } from "react";
import { Button } from "react-bootstrap";
import white_cloud from "../../assets/image/NonUserMain/white-cloud.png";
import search from "../../assets/image/NonUserMain/search.png";
import user from "../../assets/image/NonUserMain/user.png";
import artist from "../../assets/image/NonUserMain/artist.png";
import "./NonUserMain.css";
const MainTop = () => {
  return (
    <div className="main-top">
      <div id="left">
        <img src={white_cloud} alt="cloud_image" />
      </div>
      <div id="right">
        <span id="top">언제, 어디서든.</span>
        <br />
        <span id="bottom">CCBOX.</span>
      </div>
    </div>
  );
};
const MainMiddle = () => {
  return (
    <div className="main-middle" id="middle">
      <div id="top">
        <div id="middle-page-title">Features</div>
      </div>
      <div id="bottom">
        <div className="feature">
          <div className="feature-img-title">
            <img src={user} className="feature-img" alt="file_share" />
            <div className="feature-title">파일 공유</div>
          </div>
          <div className="description">
            <span>다른 사람과 협업할 때 필요한</span>
            <br />
            <span>여러 파일을 공유하세요!</span>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img-title">
            <img src={artist} className="feature-img" alt="color_highlight" />
            <div className="feature-title">파일 공유</div>
          </div>
          <div className="description">
            <span>파일과 폴더를</span>
            <br />
            <span>원하는 색깔로 칠해보세요!</span>
            <br />
            <span>색깔을 통한 파일, 폴더를</span>
            <br />
            <span>상황에 맞게 구분하세요.</span>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img-title">
            <img src={search} className="feature-img" alt="preview" />
            <div className="feature-title">미리보기</div>
          </div>
          <div className="description">
            <span>사진과 영상을 미리보기하며</span>
            <br />
            <span>다운로드할 파일인지 확인하세요!</span>
            <br />
            <span>불필요한 다운로드를 줄여줍니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
// TODO: 회원가입 버튼이 회원가입 페이지로 넘어가게 설정
const MainBottom = () => {
  return (
    <div className="main-bottom">
      <div id="upper">
        <div id="left">
          <span>간단한 회원가입으로</span>
          <br />
          <span>시작하세요.</span>
        </div>
        <div id="right">
          <Button variant="primary">회원가입</Button>
        </div>
      </div>
      <div id="footer">
        <span>2022. CCBOX, All Copyrights Reserved.</span>
      </div>
    </div>
  );
};

const NonUserMain = () => {
  return (
    <Fragment>
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </Fragment>
  );
};

export { NonUserMain };
