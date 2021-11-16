const config = {
  screens: {
    Dog: {
      path: 'dog',
    },
    Main: {
      path: "stack",
      initialRouteName: "Main",
      screens:{
        Diary: {
          path: 'diary',
        },
        DiaryDetail:{
          path: 'diarydetail'
        },
      },
    },
  }
}

const linking = {
  prefixes: ["demo://app"],
  config,
};

export default linking;
