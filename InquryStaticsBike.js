import { patch } from "../sub3Control";

import "./InquryStaticsBike.css";
import { useEffect, useState, useCallback } from "react"

function InquryStaticsBike () {
    const [stast, setStast] = useState([
        idx = "",
        state = "",
        locate = ""
    ]);

    useEffect(() => {
        const res = 
        fetch('https://localhost:8080/InquryStaticsBike', {
            method: 'post',
            body: JSON.stringify({
                idx: 1
            })
          })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
                alert("저장 완료");
            }
          })
    }, [])
   
      const stastList = stast.map((data) => (
      <form className="contents_value">
        <div className="contents_id">{stast.idx}</div>
        <div className="contents_state">{stast.state}</div>
        <div className="content_locate">{stast.location}</div>
      </form>));


    return(
        <div className="container">
            <h2>자전거 통계 조회</h2>
            <form className="contents"> 
                <div className="bicycle_id">자전거 일련번호</div>
                <div className="bicycle_state">자전거 상태</div>
                <div className="bicycle_locate">자전거 위치</div>
            </form>
            {stastList}
        </div>
    );
}

export default InquryStaticsBike;