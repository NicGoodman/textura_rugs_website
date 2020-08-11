<?php

return [
    '*' => [
        'pluginName' => 'Feed Me',
        'cache' => 60,
        'requestOptions' => [],
        'skipUpdateFieldHandle' => 'skipFeedMeUpdate',
        'backupLimit' => 100,
        'dataDelimiter' => '-|-',
        'csvColumnDelimiter' => ',',
        'parseTwig' => false,
        'compareContent' => true,
        'sleepTime' => 0,
        'logging' => true,
        'runGcBeforeFeed' => false,
        'queueTtr' => 300,
        'queueMaxRetry' => 5,
        'assetDownloadCurl' => false,
    ]
];