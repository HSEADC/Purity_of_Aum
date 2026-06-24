// const HtmlWebpackPlugin = require('html-webpack-plugin')

// function createPage(template, filename) {
// return new HtmlWebpackPlugin({
// template: template,
// filename: filename
// })
// }

const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPage(template, filename) {
  // Если template не передан — пропускаем
  if (!template) {
    console.warn('⚠️ Пропущен template в createPage');
    return [];
  }

  // Если filename не задан — генерируем его из пути template
  if (!filename) {
    filename = template
      .replace('./src/', '')
      .replace('./scr/', '')
      .replace('.html', '')
      .replace(/^\//, '');
  } else {
    // 🔧 Если filename передан — «чистим» его от ./ и лишних слешей
    filename = filename
      .replace(/^\.\//, '')  // убираем ./ в начале
      .replace(/^\//, '')    // убираем / в начале, если есть
      .replace(/\\/g, '/');  // заменяем обратные слеши на прямые (для Windows)
  }

  // Исправляем опечатки в пути к шаблону
  const safeTemplate = template.replace('./scr/', './src/').replace('./ssrc/', './src/');

  // Убеждаемся, что filename заканчивается на .html
  if (!filename.endsWith('.html')) {
    filename = filename + '.html';
  }

  console.log(`✓ Страница: ${filename} ← ${safeTemplate}`);

  return new HtmlWebpackPlugin({
    template: safeTemplate,
    filename: filename
  });
}

const htmlPages = [
createPage('./src/index.html', './index.html'),
createPage('./src/pages/articles.html', './pages/articles.html'),
createPage('./src/pages/vzaim.html', './pages/vzaim.html'),
createPage('./src/pages/zvuk.html', './pages/zvuk.html'),
createPage('./src/pages/tests.html', './pages/tests.html'),

createPage('./src/articles/art1_1.html', './articles/art1_1.html'),
createPage('./src/articles/art1_2.html', './articles/art1_2.html'),
createPage('./src/articles/art1_3.html', './articles/art1_3.html'),
createPage('./src/articles/art1_4.html', './articles/art1_4.html'),
createPage('./src/articles/art1_5.html', './articles/art1_5.html'),
createPage('./src/articles/art1_6.html', './articles/art1_6.html'),
createPage('./src/articles/art1_7.html', './articles/art1_7.html'),
createPage('./src/articles/art1_8.html', './articles/art1_8.html'),
createPage('./src/articles/art1_9.html', './articles/art1_9.html'),

createPage('./src/articles2/art2_1.html', './articles/art2_1.html'),
createPage('./src/articles2/art2_2.html', './articles/art2_2.html'),
createPage('./src/articles2/art2_3.html', './articles/art2_3.html'),
createPage('./src/articles2/art2_4.html', './articles/art2_4.html'),
createPage('./src/articles2/art2_5.html', './articles/art2_5.html'),
createPage('./src/articles2/art2_6.html', './articles/art2_6.html'),
createPage('./src/articles2/art2_7.html', './articles/art2_7.html'),
createPage('./src/articles2/art2_8.html', './articles/art2_8.html'),
createPage('./src/articles2/art2_9.html', './articles/art2_9.html'),

createPage('./src/articles3/art3_1.html', './articles3/art3_1.html'),
createPage('./src/articles3/art3_2.html', './articles3/art3_2.html'),
createPage('./src/articles3/art3_3.html', './articles3/art3_3.html'),
createPage('./src/articles3/art3_4.html', './articles3/art3_4.html'),
createPage('./src/articles3/art3_5.html', './articles3/art3_5.html'),
createPage('./src/articles3/art3_6.html', './articles3/art3_6.html'),
createPage('./src/articles3/art3_7.html', './articles3/art3_7.html'),
createPage('./src/articles3/art3_8.html', './articles3/art3_8.html'),
createPage('./src/articles3/art3_9.html', './articles3/art3_9.html'),

createPage('./src/development/1digital.html', './development/1digital.html'),
createPage('./src/development/2neuroacoustic.html', './development/2neuroacoustic.html'),
createPage('./src/development/3integration.html', './development/3integration.html'),
createPage('./src/development/4vibration.html', './development/4vibration.html'),
createPage('./src/development/5multimodal.html', './development/5multimodal.html'),
createPage('./src/development/6global.html', './development/6global.html'),

createPage('./src/interview/interview1.html', './interview/interview1.html'),

createPage('./src/meditation/1Sound_bath.html', './meditation/1Sound_bath.html'),
createPage('./src/meditation/2Mantra_meditation.html', './meditation/2Mantra_meditation.html'),
createPage('./src/meditation/3Binaural_rhythms.html', './meditation/3Binaural_rhythms.html'),
createPage('./src/meditation/4Therapy_camberton.html', './meditation/4Therapy_camberton.html'),
createPage('./src/meditation/5Vocal_toning.html', './meditation/5Vocal_toning.html'),
createPage('./src/meditation/6Shamany_barabanenie.html', './meditation/6Shamany_barabanenie.html'),
createPage('./src/meditation/7m.html', './meditation/7m.html'),
createPage('./src/meditation/8m.html', './meditation/8m.html'),
createPage('./src/meditation/9m.html', './meditation/9m.html'),
createPage('./src/meditation/10m.html', './meditation/10m.html'),
createPage('./src/meditation/11m.html', './meditation/11m.html'),
createPage('./src/meditation/12m.html', './meditation/12m.html'),

createPage('./src/meditation_work/med1.html', './meditation_work/med1.html'),
createPage('./src/meditation_work/med2.html', './meditation_work/med2.html'),
createPage('./src/meditation_work/med3.html', './meditation_work/med3.html'),
createPage('./src/meditation_work/med4.html', './meditation_work/med4.html'),
createPage('./src/meditation_work/med5.html', './meditation_work/med5.html'),
createPage('./src/meditation_work/med6.html', './meditation_work/med6.html'),
createPage('./src/meditation_work/med7.html', './meditation_work/med7.html'),
createPage('./src/meditation_work/med8.html', './meditation_work/med8.html'),
createPage('./src/meditation_work/med9.html', './meditation_work/med9.html'),
createPage('./src/meditation_work/med10.html', './meditation_work/med10.html'),
createPage('./src/meditation_work/med11.html', './meditation_work/med11.html'),
createPage('./src/meditation_work/med12.html', './meditation_work/med12.html'),

createPage('./src/muzinst/1.html', './muzinst/1.html'),
createPage('./src/muzinst/2.html', './muzinst/2.html'),
createPage('./src/muzinst/3.html', './muzinst/3.html'),
createPage('./src/muzinst/4.html', './muzinst/4.html'),
createPage('./src/muzinst/5.html', './muzinst/5.html'),
createPage('./src/muzinst/6.html', './muzinst/6.html'),
createPage('./src/muzinst/7.html', './muzinst/7.html'),
createPage('./src/muzinst/8.html', './muzinst/8.html'),
createPage('./src/muzinst/9.html', './muzinst/9.html'),
createPage('./src/muzinst/10.html', './muzinst/10.html'),
createPage('./src/muzinst/11.html', './muzinst/11.html'),
createPage('./src/muzinst/12.html', './muzinst/12.html'),
createPage('./src/muzinst/13.html', './muzinst/13.html'),
createPage('./src/muzinst/14.html', './muzinst/14.html'),
createPage('./src/muzinst/15.html', './muzinst/15.html'),

createPage('./src/people/Boris_Teplov.html', './people/Boris_Teplov.html'),
createPage('./src/people/Christian_Huygens.html', './people/Christian_Huygens.html'),
createPage('./src/people/Don_Campbell.html', './people/Don_Campbell.html'),
createPage('./src/people/Fabien_Maman.html', './people/Fabien_Maman.html'),
createPage('./src/people/Mitch_Gayer.html', './people/Mitch_Gayer.html'),
createPage('./src/people/Petr_Anokhin.html', './people/Petr_Anokhin.html'),
createPage('./src/people/Tomatis_Alfred.html', './people/Tomatis_Alfred.html'),
createPage('./src/people/Vladimir_Bechterev.html', './people/Vladimir_Bechterev.html'),

createPage('./src/tests/test1.html', './tests/test1.html'),
createPage('./src/tests/test2.html', './tests/test2.html'),
createPage('./src/tests/test3.html', './tests/test3.html'),
createPage('./src/tests/test4.html', './tests/test4.html'),
createPage('./src/tests/test5.html', './tests/test5.html'),
createPage('./src/tests/test6.html', './tests/test6.html'),
createPage('./src/tests/test7.html', './tests/test7.html'),
createPage('./src/tests/test8.html', './tests/test8.html'),
createPage('./src/tests/test9.html', './tests/test9.html'),
createPage('./src/tests/test10.html', './tests/test10.html'),
createPage('./src/tests/test11.html', './tests/test11.html'),
createPage('./src/tests/test12.html', './tests/test12.html'),
createPage('./src/tests/test13.html', './tests/test13.html'),
createPage('./src/tests/test14.html', './tests/test14.html'),
createPage('./src/tests/test15.html', './tests/test15.html'),
createPage('./src/tests/test16.html', './tests/test16.html'),
createPage('./src/tests/test17.html', './tests/test17.html'),
createPage('./src/tests/test18.html', './tests/test18.html'),

// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
]

module.exports = htmlPages