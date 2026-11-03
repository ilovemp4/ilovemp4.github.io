export type SupportedLang = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh' | 'ru';

export const LANGUAGES: { code: SupportedLang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español (Spanish)' },
  { code: 'pt', label: 'Português (Portuguese)' },
  { code: 'de', label: 'Deutsch (German)' },
  { code: 'fr', label: 'Français (French)' },
  { code: 'ja', label: '日本語 (Japanese)' },
  { code: 'zh', label: '简体中文 (Simplified Chinese)' },
  { code: 'ru', label: 'Русский (Russian)' },
];

export interface TranslationDict {
  nav_language: string;
  nav_theme: string;
  nav_pwa: string;
  nav_support: string;
  breadcrumb_home: string;
  breadcrumb_tools: string;
  breadcrumb_current: string;
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  preset_to_mp4: string;
  preset_mp4_to_mp3: string;
  preset_compress_mp4: string;
  preset_mp4_to_gif: string;
  preset_camera_to_mp4: string;
  step1_label: string;
  convert_from: string;
  convert_to: string;
  dropzone_title: string;
  dropzone_subtitle: string;
  dropzone_btn: string;
  settings_toggle: string;
  setting_resolution: string;
  setting_quality: string;
  setting_audio_bitrate: string;
  setting_trim_start: string;
  setting_trim_end: string;
  btn_convert_now: string;
  btn_download: string;
  btn_convert_another: string;
  status_ready: string;
  status_loading_engine: string;
  status_converting: string;
  status_completed: string;
  section_formats_title: string;
  section_formats_subtitle: string;
  section_howto_title: string;
  section_faq_title: string;
  pwa_modal_title: string;
  pwa_modal_desc: string;
  pwa_modal_close: string;
}

export const translations: Record<SupportedLang, TranslationDict> = {
  en: {
    nav_language: 'Language',
    nav_theme: 'Theme',
    nav_pwa: 'Add to Home Screen',
    nav_support: 'Support the Developer',
    breadcrumb_home: 'Home',
    breadcrumb_tools: 'Video Converter',
    breadcrumb_current: 'Free MP4 Converter',
    hero_badge: '100% Free & Private',
    hero_title: 'Free Video & Audio Converter to MP4, MP3 & GIF',
    hero_subtitle:
      'Convert MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3, and WAV instantly in your browser. 100% private with no file size limits.',
    preset_to_mp4: 'Convert to MP4',
    preset_mp4_to_mp3: 'MP4 to MP3',
    preset_compress_mp4: 'Compress MP4',
    preset_mp4_to_gif: 'MP4 to GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI to MP4',
    step1_label: 'Choose Format',
    convert_from: 'Input Format',
    convert_to: 'Output Format',
    dropzone_title: 'Drag & Drop Video, Audio, or GIF File Here',
    dropzone_subtitle:
      'Supports MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Select Video or Audio File',
    settings_toggle: 'Conversion Settings (Resolution, Compression, Bitrate & Trim)',
    setting_resolution: 'Video Resolution',
    setting_quality: 'Compression Quality',
    setting_audio_bitrate: 'Audio Bitrate',
    setting_trim_start: 'Trim Start (HH:MM:SS)',
    setting_trim_end: 'Trim End (HH:MM:SS)',
    btn_convert_now: 'Convert',
    btn_download: 'Download',
    btn_convert_another: 'Convert Another',
    status_ready: 'Ready to convert',
    status_loading_engine: 'Preparing converter...',
    status_converting: 'Converting...',
    status_completed: 'Conversion Complete!',
    section_formats_title: 'Supported Format Conversions & Social Video Presets',
    section_formats_subtitle:
      'Click any card below to pre-configure the converter above for your exact video or audio workflow.',
    section_howto_title: 'How to Convert Videos to MP4 or MP3 in 3 Instant Steps',
    section_faq_title: 'Frequently Asked Questions (FAQ)',
    pwa_modal_title: 'Install iLoveMP4 for Offline Use',
    pwa_modal_desc:
      'In Safari or mobile browsers, tap the Share button and select "Add to Home Screen" to install iLoveMP4 as an offline app.',
    pwa_modal_close: 'Got It',
  },
  es: {
    nav_language: 'Idioma',
    nav_theme: 'Tema',
    nav_pwa: 'Añadir a Inicio',
    nav_support: 'Apoyar al Desarrollador',
    breadcrumb_home: 'Inicio',
    breadcrumb_tools: 'Convertidor de Video',
    breadcrumb_current: 'Convertidor MP4 Gratis',
    hero_badge: '100% Gratis y Privado',
    hero_title: 'Convertidor Gratis de Video y Audio a MP4, MP3 y GIF',
    hero_subtitle:
      'Convierte MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3 y WAV al instante en tu navegador.',
    preset_to_mp4: 'Convertir a MP4',
    preset_mp4_to_mp3: 'MP4 a MP3',
    preset_compress_mp4: 'Comprimir MP4',
    preset_mp4_to_gif: 'MP4 a GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI a MP4',
    step1_label: 'Elegir Formato',
    convert_from: 'Formato de Entrada',
    convert_to: 'Formato de Salida',
    dropzone_title: 'Arrastra y Suelta tu Archivo de Video, Audio o GIF Aquí',
    dropzone_subtitle:
      'Soporta MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Seleccionar Archivo de Video o Audio',
    settings_toggle: 'Ajustes de Conversión (Resolución, Compresión, Bitrate y Recorte)',
    setting_resolution: 'Resolución de Video',
    setting_quality: 'Calidad de Compresión',
    setting_audio_bitrate: 'Bitrate de Audio',
    setting_trim_start: 'Inicio de Recorte (HH:MM:SS)',
    setting_trim_end: 'Fin de Recorte (HH:MM:SS)',
    btn_convert_now: 'Convertir',
    btn_download: 'Descargar',
    btn_convert_another: 'Convertir Otro',
    status_ready: 'Listo para convertir',
    status_loading_engine: 'Preparando...',
    status_converting: 'Convirtiendo...',
    status_completed: '¡Conversión Completada!',
    section_formats_title: 'Formatos Soportados y Preajustes para Redes Sociales',
    section_formats_subtitle:
      'Haz clic en cualquier tarjeta para configurar automáticamente el convertidor.',
    section_howto_title: 'Cómo Convertir Videos a MP4 o MP3 en 3 Pasos',
    section_faq_title: 'Preguntas Frecuentes (FAQ)',
    pwa_modal_title: 'Instalar iLoveMP4 para Uso Sin Conexión',
    pwa_modal_desc:
      'En Safari o navegadores móviles, pulsa el botón Compartir y selecciona "Añadir a la pantalla de inicio".',
    pwa_modal_close: 'Entendido',
  },
  pt: {
    nav_language: 'Idioma',
    nav_theme: 'Tema',
    nav_pwa: 'Adicionar à Tela Inicial',
    nav_support: 'Apoiar o Desenvolvedor',
    breadcrumb_home: 'Início',
    breadcrumb_tools: 'Conversor de Vídeo',
    breadcrumb_current: 'Conversor MP4 Grátis',
    hero_badge: '100% Grátis e Privado',
    hero_title: 'Conversor Grátis de Vídeo e Áudio para MP4, MP3 e GIF',
    hero_subtitle:
      'Converta MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3 e WAV instantaneamente no seu navegador.',
    preset_to_mp4: 'Converter para MP4',
    preset_mp4_to_mp3: 'MP4 para MP3',
    preset_compress_mp4: 'Comprimir MP4',
    preset_mp4_to_gif: 'MP4 para GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI para MP4',
    step1_label: 'Escolher Formato',
    convert_from: 'Formato de Entrada',
    convert_to: 'Formato de Saída',
    dropzone_title: 'Arraste e Solte seu Arquivo de Vídeo, Áudio ou GIF Aqui',
    dropzone_subtitle:
      'Suporta MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Selecionar Arquivo de Vídeo ou Áudio',
    settings_toggle: 'Configurações de Conversão (Resolução, Compressão, Bitrate e Corte)',
    setting_resolution: 'Resolução de Vídeo',
    setting_quality: 'Qualidade de Compressão',
    setting_audio_bitrate: 'Bitrate de Áudio',
    setting_trim_start: 'Início do Corte (HH:MM:SS)',
    setting_trim_end: 'Fim do Corte (HH:MM:SS)',
    btn_convert_now: 'Converter',
    btn_download: 'Baixar',
    btn_convert_another: 'Converter Outro',
    status_ready: 'Pronto para converter',
    status_loading_engine: 'Preparando...',
    status_converting: 'Convertendo...',
    status_completed: 'Conversão Concluída!',
    section_formats_title: 'Conversões de Formato Suportadas e Predefinições Sociais',
    section_formats_subtitle:
      'Clique em qualquer cartão abaixo para configurar rapidamente o conversor acima.',
    section_howto_title: 'Como Converter Vídeos para MP4 ou MP3 em 3 Passos',
    section_faq_title: 'Perguntas Frequentes (FAQ)',
    pwa_modal_title: 'Instalar iLoveMP4 para Uso Offline',
    pwa_modal_desc:
      'No Safari ou navegadores móveis, toque no botão Compartilhar e selecione "Adicionar à Tela de Início".',
    pwa_modal_close: 'Entendi',
  },
  de: {
    nav_language: 'Sprache',
    nav_theme: 'Design',
    nav_pwa: 'Zum Startbildschirm',
    nav_support: 'Entwickler unterstützen',
    breadcrumb_home: 'Startseite',
    breadcrumb_tools: 'Video Konverter',
    breadcrumb_current: 'Kostenloser MP4 Konverter',
    hero_badge: '100% Kostenlos & Privat',
    hero_title: 'Kostenloser Video- & Audio-Konverter zu MP4, MP3 & GIF',
    hero_subtitle:
      'Konvertieren Sie MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3 und WAV direkt im Browser.',
    preset_to_mp4: 'In MP4 konvertieren',
    preset_mp4_to_mp3: 'MP4 zu MP3',
    preset_compress_mp4: 'MP4 komprimieren',
    preset_mp4_to_gif: 'MP4 zu GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI zu MP4',
    step1_label: 'Format wählen',
    convert_from: 'Eingabeformat',
    convert_to: 'Ausgabeformat',
    dropzone_title: 'Video-, Audio- oder GIF-Datei hierher ziehen',
    dropzone_subtitle:
      'Unterstützt MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Video- oder Audiodatei auswählen',
    settings_toggle: 'Konvertierungseinstellungen (Auflösung, Qualität, Bitrate & Schnitt)',
    setting_resolution: 'Videoauflösung',
    setting_quality: 'Komprimierungsqualität',
    setting_audio_bitrate: 'Audio-Bitrate',
    setting_trim_start: 'Startzeit (HH:MM:SS)',
    setting_trim_end: 'Endzeit (HH:MM:SS)',
    btn_convert_now: 'Konvertieren',
    btn_download: 'Herunterladen',
    btn_convert_another: 'Weitere Datei',
    status_ready: 'Bereit zum Konvertieren',
    status_loading_engine: 'Wird vorbereitet...',
    status_converting: 'Konvertiere...',
    status_completed: 'Konvertierung abgeschlossen!',
    section_formats_title: 'Unterstützte Formate & Social-Media-Presets',
    section_formats_subtitle:
      'Klicken Sie auf eine Karte, um den Konverter oben direkt einzustellen.',
    section_howto_title: 'So konvertieren Sie Videos in 3 Schritten in MP4 oder MP3',
    section_faq_title: 'Häufig gestellte Fragen (FAQ)',
    pwa_modal_title: 'iLoveMP4 für Offline-Nutzung installieren',
    pwa_modal_desc:
      'Tippen Sie in Safari auf das Teilen-Symbol und wählen Sie „Zum Home-Bildschirm".',
    pwa_modal_close: 'Verstanden',
  },
  fr: {
    nav_language: 'Langue',
    nav_theme: 'Thème',
    nav_pwa: "Ajouter à l'écran d'accueil",
    nav_support: 'Soutenir le Développeur',
    breadcrumb_home: 'Accueil',
    breadcrumb_tools: 'Convertisseur Vidéo',
    breadcrumb_current: 'Convertisseur MP4 Gratuit',
    hero_badge: '100% Gratuit et Privé',
    hero_title: 'Convertisseur Vidéo & Audio Gratuit vers MP4, MP3 et GIF',
    hero_subtitle:
      'Convertissez MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3 et WAV instantanément dans votre navigateur.',
    preset_to_mp4: 'Convertir en MP4',
    preset_mp4_to_mp3: 'MP4 en MP3',
    preset_compress_mp4: 'Compresser MP4',
    preset_mp4_to_gif: 'MP4 en GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI en MP4',
    step1_label: 'Choisir le Format',
    convert_from: "Format d'entrée",
    convert_to: 'Format de sortie',
    dropzone_title: 'Glissez et Déposez Votre Fichier Vidéo, Audio ou GIF Ici',
    dropzone_subtitle:
      'Prend en charge MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Sélectionner un Fichier Vidéo ou Audio',
    settings_toggle: 'Paramètres de Conversion (Résolution, Compression, Débit et Découpe)',
    setting_resolution: 'Résolution Vidéo',
    setting_quality: 'Qualité de Compression',
    setting_audio_bitrate: 'Débit Audio',
    setting_trim_start: 'Début (HH:MM:SS)',
    setting_trim_end: 'Fin (HH:MM:SS)',
    btn_convert_now: 'Convertir',
    btn_download: 'Télécharger',
    btn_convert_another: 'Convertir un Autre',
    status_ready: 'Prêt à convertir',
    status_loading_engine: 'Préparation...',
    status_converting: 'Conversion en cours...',
    status_completed: 'Conversion Terminée !',
    section_formats_title: 'Formats Pris en Charge et Préréglages Réseaux Sociaux',
    section_formats_subtitle:
      'Cliquez sur une carte ci-dessous pour configurer automatiquement le convertisseur.',
    section_howto_title: 'Comment Convertir des Vidéos en MP4 ou MP3 en 3 Étapes',
    section_faq_title: 'Questions Fréquemment Posées (FAQ)',
    pwa_modal_title: 'Installer iLoveMP4 pour un Usage Hors Ligne',
    pwa_modal_desc:
      'Dans Safari, appuyez sur le bouton Partager et sélectionnez « Sur l’écran d’accueil ».',
    pwa_modal_close: 'Compris',
  },
  ja: {
    nav_language: '言語',
    nav_theme: 'テーマ',
    nav_pwa: 'ホーム画面に追加',
    nav_support: '開発者を支援する',
    breadcrumb_home: 'ホーム',
    breadcrumb_tools: '動画コンバーター',
    breadcrumb_current: '無料MP4変換ツール',
    hero_badge: '100% 無料・安全',
    hero_title: '無料の動画・音声 MP4 / MP3 / GIF 変換ツール',
    hero_subtitle:
      'MOV、MKV、AVI、HEVC、WEBM、MTS、DAV、MPEG、GIF、MP3、WAVをブラウザ内で即座に変換します。',
    preset_to_mp4: 'MP4に変換',
    preset_mp4_to_mp3: 'MP4からMP3',
    preset_compress_mp4: 'MP4を圧縮',
    preset_mp4_to_gif: 'MP4からGIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI から MP4',
    step1_label: 'フォーマットを選択',
    convert_from: '入力形式',
    convert_to: '出力形式',
    dropzone_title: '動画・音声・GIFファイルをここにドラッグ＆ドロップ',
    dropzone_subtitle:
      'MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV対応',
    dropzone_btn: '動画または音声ファイルを選択',
    settings_toggle: '変換設定（解像度・圧縮品質・ビットレート・トリミング）',
    setting_resolution: '動画の解像度',
    setting_quality: '圧縮品質',
    setting_audio_bitrate: '音声ビットレート',
    setting_trim_start: '開始時間 (HH:MM:SS)',
    setting_trim_end: '終了時間 (HH:MM:SS)',
    btn_convert_now: '変換する',
    btn_download: 'ダウンロード',
    btn_convert_another: '別のファイルを変換',
    status_ready: '変換準備完了',
    status_loading_engine: '準備中...',
    status_converting: '変換中...',
    status_completed: '変換完了！',
    section_formats_title: '対応フォーマット一覧＆SNS動画プリセット',
    section_formats_subtitle: 'カードをクリックすると、上部のコンバーターに自動設定されます。',
    section_howto_title: '3ステップで動画をMP4・MP3に無料変換する方法',
    section_faq_title: 'よくある質問 (FAQ)',
    pwa_modal_title: 'iLoveMP4をホーム画面に追加',
    pwa_modal_desc: 'Safariの共有ボタンをタップし、「ホーム画面に追加」を選択してください。',
    pwa_modal_close: '閉じる',
  },
  zh: {
    nav_language: '语言',
    nav_theme: '主题',
    nav_pwa: '添加到主屏幕',
    nav_support: '支持开发者',
    breadcrumb_home: '首页',
    breadcrumb_tools: '视频转换器',
    breadcrumb_current: '免费MP4转换器',
    hero_badge: '100% 免费与隐私安全',
    hero_title: '免费在线视频与音频转换器 (MP4 / MP3 / GIF)',
    hero_subtitle:
      '在您的浏览器中极速将 MOV、MKV、AVI、HEVC、WEBM、MTS、DAV、MPEG、GIF、MP3 和 WAV 转换为 MP4。',
    preset_to_mp4: '转换为 MP4',
    preset_mp4_to_mp3: 'MP4 转 MP3',
    preset_compress_mp4: '压缩 MP4',
    preset_mp4_to_gif: 'MP4 转 GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI 转 MP4',
    step1_label: '选择格式',
    convert_from: '输入格式',
    convert_to: '输出格式',
    dropzone_title: '将视频、音频或 GIF 文件拖放到此处',
    dropzone_subtitle:
      '支持 MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: '选择视频或音频文件',
    settings_toggle: '转换设置（分辨率、压缩质量、音频比特率与裁剪）',
    setting_resolution: '视频分辨率',
    setting_quality: '压缩质量',
    setting_audio_bitrate: '音频比特率',
    setting_trim_start: '起始时间 (HH:MM:SS)',
    setting_trim_end: '结束时间 (HH:MM:SS)',
    btn_convert_now: '转换',
    btn_download: '下载',
    btn_convert_another: '转换另一个文件',
    status_ready: '准备就绪',
    status_loading_engine: '准备中...',
    status_converting: '转换中...',
    status_completed: '转换完成！',
    section_formats_title: '支持的格式转换与社交媒体视频预设',
    section_formats_subtitle: '点击下方任意卡片即可自动配置上方转换器。',
    section_howto_title: '如何通过 3 个简单步骤将视频转换为 MP4 或 MP3',
    section_faq_title: '常见问题解答 (FAQ)',
    pwa_modal_title: '安装 iLoveMP4 离线应用',
    pwa_modal_desc: '在 Safari 或移动浏览器中，点击“分享”按钮并选择“添加到主屏幕”。',
    pwa_modal_close: '知道了',
  },
  ru: {
    nav_language: 'Язык',
    nav_theme: 'Тема',
    nav_pwa: 'На главный экран',
    nav_support: 'Поддержать автора',
    breadcrumb_home: 'Главная',
    breadcrumb_tools: 'Видео Конвертер',
    breadcrumb_current: 'Бесплатный MP4 Конвертер',
    hero_badge: '100% Бесплатно и Приватно',
    hero_title: 'Бесплатный Конвертер Видео и Аудио в MP4, MP3 и GIF',
    hero_subtitle:
      'Конвертируйте MOV, MKV, AVI, HEVC, WEBM, MTS, DAV, MPEG, GIF, MP3 и WAV мгновенно в вашем браузере.',
    preset_to_mp4: 'Конвертировать в MP4',
    preset_mp4_to_mp3: 'MP4 в MP3',
    preset_compress_mp4: 'Сжать MP4',
    preset_mp4_to_gif: 'MP4 в GIF',
    preset_camera_to_mp4: 'MOV / MKV / AVI в MP4',
    step1_label: 'Выберите формат',
    convert_from: 'Исходный формат',
    convert_to: 'Целевой формат',
    dropzone_title: 'Перетащите видео, аудио или GIF файл сюда',
    dropzone_subtitle:
      'Поддержка MP4, MOV, MKV, AVI, WEBM, HEVC, MTS, DAV, MPEG, MPG, GIF, MP3, WAV, M4A, FLV',
    dropzone_btn: 'Выбрать видео или аудио файл',
    settings_toggle: 'Настройки конвертации (Разрешение, Сжатие, Битрейт и Обрезка)',
    setting_resolution: 'Разрешение видео',
    setting_quality: 'Качество сжатия',
    setting_audio_bitrate: 'Битрейт аудио',
    setting_trim_start: 'Начало (ЧЧ:ММ:СС)',
    setting_trim_end: 'Конец (ЧЧ:ММ:СС)',
    btn_convert_now: 'Конвертировать',
    btn_download: 'Скачать',
    btn_convert_another: 'Конвертировать ещё',
    status_ready: 'Готово к конвертации',
    status_loading_engine: 'Подготовка...',
    status_converting: 'Конвертация...',
    status_completed: 'Конвертация завершена!',
    section_formats_title: 'Поддерживаемые форматы и пресеты для соцсетей',
    section_formats_subtitle:
      'Нажмите на любую карточку ниже, чтобы автоматически настроить конвертер.',
    section_howto_title: 'Как конвертировать видео в MP4 или MP3 за 3 шага',
    section_faq_title: 'Часто задаваемые вопросы (FAQ)',
    pwa_modal_title: 'Установите iLoveMP4 для офлайн-работы',
    pwa_modal_desc:
      'В браузере Safari нажмите кнопку «Поделиться» и выберите «На экран „Домой“».',
    pwa_modal_close: 'Понятно',
  },
};
