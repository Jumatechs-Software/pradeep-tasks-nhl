/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { Button } from "./button";
import FileInputCover from "../../../assets/fileRead.svg";

const CustomImageInput = ({ image, setImage, setFile }) => {
  const imagePreviewHandler = (e) => {
    const fileData = e.target.files?.[0];
    if (!fileData) return;
    setFile(fileData);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileData);
    fileReader.onloadend = () => {
      setImage(() => fileReader.result);
    };
  };

  return (
    <div className="flex h-[300px] w-full mt-2 relative">
      {image && (
        <img
          src={image}
          className="w-full flex h-auto max-h-[300px] absolute top-0 left-0 bg-white"
          height={300}
          width={1400}
          alt="img"
        />
      )}
      {image && (
        <Button
          className=" absolute right-2 top-2"
          variant="outline"
          size="icon"
          onClick={() => setImage(null)}
        >
          <X size={20} color="red" />
        </Button>
      )}
      <label
        htmlFor="customFileInput"
        className=" bg-slate-100 py-4 rounded-lg flex-1 flex flex-col gap-4 justify-center items-center"
      >
        <img alt="select file" src={FileInputCover} width={150} height={150} />
        <h2 className=" text-2xl"> Upload A file </h2>
        <p className=" text-sm text-slate-500 font-medium">
          click here to select a file from your machine
        </p>
      </label>
      <input
        id="customFileInput"
        type="file"
        onChange={imagePreviewHandler}
        accept=".svg,.png,.jpeg,.jpg"
        className="hidden"
      />
    </div>
  );
};

export default CustomImageInput;
