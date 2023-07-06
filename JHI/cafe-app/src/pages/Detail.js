import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  return (
    <div>
      <div>
        <div onClick={() => navigate(-1)}>〈</div>
        <h1>{location.state.name}</h1>
      </div>
      <div>
        <img src={location.state.imageUrl} />
        <div>
          <div>
            <div>
              {location.state.time.open} - {location.state.time.close}
            </div>
            <div>{location.state.phone}</div>
          </div>
          <Link to={`/cafe/${params.id}/seat`} state={location.state}>
            좌석 현황
          </Link>
        </div>
        <div>
          <span>메뉴</span>
          <ul>
            {location.state.menu.map((item) => (
              <li>
                {item.name} -{item.price}원
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
