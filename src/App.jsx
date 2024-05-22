import { Button, Card } from "flowbite-react";
import "./App.css";
import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="h-screen items-center space-y-4 roboto-meidium">
        <Card>
          <div className="flex-col items-center space-y-4 ">
            <div className="flex items-center justify-center">
              <img
                className="rounded items-center shadow-lg "
                src={Logo}
                width={200}
                alt="Bila"
              />
            </div>
            <div className="flex items-center justify-center h-full">
              <h1 className="text-4xl font-bold text-center">
                Selamat Datang di Portal Kota Tanggerang
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
              Download Aplikasi Tanggaerang live
            </Button>
            <Button href="https://play.google.com/store/apps/details?id=go.id.tangerangkota.tangerangayo&pcampaignid=web_share">
              Download Aplikasi Tanggerang Ayo
            </Button>
            <Button href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id&pcampaignid=web_share">
              Download Aplikasi Identitas Kependudukan Digital
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
    </>
  );
}

export default App;
