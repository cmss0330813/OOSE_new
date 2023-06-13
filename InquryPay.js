import { patch } from "../sub3Control";
import "./InquryPay.css"
import { useEffect, useState, useCallback } from "react"

async function InquryPay() {
    const [payment, setPay] = useState("");
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const res = 
        fetch('https://localhost:8080/InquryPay', {
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

    return(
        <div className="container">
            <h2>결제 내역 조회</h2> 

            <div className="inputID">
                <div className="text">사용자의 id를 입력해주세요</div>
                <input id="userId">{userId}</input>
            </div>

            <div className="contents"> 
                <div className="idx">일련번호
                    <div className="content_idx">{payment.idx}</div>
                </div>
                <div className="method">결재 방식
                    <div className="content_method">{payment.method}</div>
                </div>
                <div className="isEasy">간편결제 여부
                    <div className="content_isEasy">{payment.isEasyPayment}</div>
                </div>
                <div className="extraPay">미납금
                    <div className="content_extraPay">{payment.extraPayment}</div>
                </div>
            </div>
        </div>      
    );
}
export default InquryPay;