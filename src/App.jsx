import { Button, Card } from "flowbite-react";
import "./App.css";
import Logo from "./assets/logo.png";
import BackgroundImage from "./assets/bg-image.png";

function App() {
  return (
    <>
      <div className="background-container h-screen"></div>
      <div className="overlay"></div>
      <div className=" flex items-center justify-center roboto-medium content mx-5 my-5">
        <div className="grid items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              className="rounded items-center "
              src={Logo}
              width={200}
              alt="Bila"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-center my-3">
              SISTEM INFORMASI KELUAHAN SUDIMARA BARAT
            </h1>
          </div>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://www.tangerangkota.go.id/"
            target="_blank"
          >
            WEBSITE KOTA TANGGERANG
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://kec-tangerang.tangerangkota.go.id/layanan"
            target="_blank"
          >
            WEBSITE KECAMATAN CILEDUG
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://sites.google.com/view/kelurahansudimarabarat/profil/tugas-dan-fungsi"
            target="_blank"
          >
            KELUARAHAN SUDIMARA BARAT
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://sobatdukcapil.tangerangkota.go.id/home/informasi/persyaratan"
            target="_blank"
          >
            SOBATDUKCAPIL
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=id.go.tangerangkota.tangeranglive&pcampaignid=web_share"
            target="_blank"
          >
            APLIKASI TANGGERANG LIVE
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=go.id.tangerangkota.tangerangayo&pcampaignid=web_share"
            target="_blank"
          >
            APLIKASI TANGGERANG AYO
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id&pcampaignid=web_share"
            target="_blank"
          >
            APLIKASI IDENTITAS KEPENDUDUKAN DIGITAL
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://drive.google.com/file/d/1--UzovxsbHqzayUaYy8sbr_vx1ImdO_f/view?usp=drive_link"
            target="_blank"
          >
            PERSYARATAN PELAYANAN
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://drive.google.com/drive/folders/1-FioOaOCNdJ1JbI_gEISqrqOokARj8Xm"
            target="_blank"
          >
            ALUR PELAYANAN PEMBUATAN AHLI WARIS
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl mb-4"
            href="https://docs.google.com/forms/d/1k-zbF4wtr3LYFzwEm3rmAeFJZdon7irkR3eRCzX1pcY/viewform?edit_requested=true"
            target="_blank"
          >
            SURVEY KEPUASAN MASYARAKAT
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
