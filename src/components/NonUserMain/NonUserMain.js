import { Fragment } from "react";
import white_cloud from "../../assets/NonUserMain/white-cloud.png";
import search from "../../assets/NonUserMain/search.png";
import user from "../../assets/NonUserMain/user.png";
import artist from "../../assets/NonUserMain/artist.png";
import "./NonUserMain.css";
function MainTop() {
  return (
    <div className="non-user-main-top">
      <div id="left">
        <img src={white_cloud} id="left" alt="cloud_image" />
      </div>
      <div id="right">
        <span id="top">언제, 어디서든.</span>
        <br />
        <span id="bottom">CCBOX.</span>
      </div>
    </div>
  );
}
function MainMiddle() {
  return (
    <div className="non-user-main-middle">
      <div className="top">
        <p id="middle-page-title">Features</p>
      </div>
      <div className="bottom">
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
}
function MainBottom() {}

export function Main() {
  return (
    <Fragment>
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </Fragment>
  );
}
