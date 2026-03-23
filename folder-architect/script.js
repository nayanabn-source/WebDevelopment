let folders = [
  {
    folderName: "Documents",
    files: ["Resume.docx", "Report.pdf", "Notes.txt"]
  },
  {
    folderName: "Images",
    files: ["photo1.jpg", "photo2.png", "diagram.svg"]
  },
  {
    folderName: "Videos",
    files: ["movie.mp4", "clip.avi"]
  }
];

for (let i = 0; i < folders.length; i++) {
  console.log("Folder: " + folders[i].folderName);

  for (let j = 0; j < folders[i].files.length; j++) {
    console.log(" - " + folders[i].files[j]);
  }

  console.log("----------------------");
}