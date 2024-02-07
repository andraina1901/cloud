export function MarqueItem({src}) {
    return(
        <div className="client-item">
        <div className="client-img">
          <a href="#">
            <img src={src} alt="Client Image" />
          </a>
        </div>
      </div>
    );
}