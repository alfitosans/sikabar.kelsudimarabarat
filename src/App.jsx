import { Button, Card } from "flowbite-react";
import "./App.css";
import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <body>
        <div className="h-screen items-center  roboto-meidium">
          <Card>
            <div className="grid items-center gap-2  ">
              <div className="flex items-center justify-center">
                <img
                  className="rounded items-center shadow-lg "
                  src={Logo}
                  width={200}
                  alt="Bila"
                />
              </div>
              <div className="flex items-center justify-center h-full">
                <h1
                  style={{ fontFamily: "Roboto, sans-serif" }}
                  className="text-4xl font-bold text-center mb-3"
                >
                  sistem informasi kelurahan sudimara barat
                </h1>
              </div>
              <Button href="https://www.tangerangkota.go.id/" target="_blank">
                Website Kota Tangerang
              </Button>
              <Button
                href="https://kec-tangerang.tangerangkota.go.id/layanan"
                target="_blank"
              >
                Website Kecamatan Ciledug
              </Button>
              <Button
                href="https://sites.google.com/view/kelurahansudimarabarat/profil/tugas-dan-fungsi"
                target="_blank"
              >
                Kelurahan Sudimara Barat
              </Button>
              <Button
                href="https://sobatdukcapil.tangerangkota.go.id/home/informasi/persyaratan"
                target="_blank"
              >
                SobatDukcapil
              </Button>
              <Button href="https://play.google.com/store/apps/details?id=id.go.tangerangkota.tangeranglive&pcampaignid=web_share">
                Aplikasi Tanggaerang live
              </Button>
              <Button href="https://play.google.com/store/apps/details?id=go.id.tangerangkota.tangerangayo&pcampaignid=web_share">
                Aplikasi Tanggerang Ayo
              </Button>
              <Button href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id&pcampaignid=web_share">
                Aplikasi Identitas Kependudukan Digital
              </Button>
              <Button
                href="https://docs.google.com/forms/d/1k-zbF4wtr3LYFzwEm3rmAeFJZdon7irkR3eRCzX1pcY/viewform?edit_requested=true"
                target="_blank"
              >
                Survey Kepuasan Masyarakat
              </Button>
            </div>
          </Card>
        </div>
      </body>
    </>
  );
}

export default App;
