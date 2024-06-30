import React from "react";

const Element1 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent:"center" }}>
        <div>
          {/* Element 01 */}
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "green",
              border: "none",
              borderRadius: "200px",
              backgroundImage:
                "url(https://media.istockphoto.com/id/1395868512/photo/beautiful-abstract-purple-blue-teal-background-gradient-toned-rough-surface-texture-colorful.webp?b=1&s=170667a&w=0&k=20&c=tWdhYmFPUdaI7XdHs9Uhz1pNWohszAsbYavEAGsPR2A=)",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div>
          {/* Element 02 */}
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "blue",
              border: "none",
              borderTopRightRadius: "200px",
              borderBottomLeftRadius: "200px",
              backgroundImage:
                "url(https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg)",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div>
          {/* Element 03 */}
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "red",
              border: "none",
              borderTopLeftRadius: "200px",
              borderBottomRightRadius: "200px",
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/714/935/806/rainbow-colorful-background-wallpaper-preview.jpg)",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "50px", marginLeft: "50px", justifyContent: 'center', }}>
        <div>
          {/* Element 04 */}
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "yellow",
              border: "none",
              borderRadius: "200px",
              transform: "rotate(45deg)",
              backgroundImage:
                "url(https://t3.ftcdn.net/jpg/04/11/46/12/240_F_411461244_SLQVFbk9E7iBpc9yp3uIFuLjNzzhLnEe.jpg)",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div>
          {/* Element 05 */}
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "purple",
              border: "none",
              borderRadius: "200px",
              transform: "rotate(-45deg)",
              transformOrigin: "top right",
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6PBHH24D59jL30I927t2H4F_mrK4w893OJUI4hTSx_xpW681nt0k5jud6zQ4-gB-y9E&usqp=CAU)",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Element1;
