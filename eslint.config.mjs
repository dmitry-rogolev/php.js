import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as espree from 'espree';

/**
 * Конфигурация библиотеки php.js
 */
const eslintConfig = {
    /**
     * Имя объекта конфигурации.
     *
     * Это используется в сообщениях об ошибках и инспекторе конфигурации,
     * чтобы помочь определить, какой объект конфигурации используется.
     */
    name: 'eslint-config-php.js',

    /**
     * Массив шаблонов glob, указывающий файлы, к которым должен применяться
     * объект конфигурации. Если не указано, объект конфигурации применяется
     * ко всем файлам, соответствующим любому другому объекту конфигурации.
     */
    files: ['src/**/*.mjs', 'tests/**/*.mjs'],

    /**
     * Массив шаблонов glob, указывающий файлы, к которым объект конфигурации
     * не должен применяться. Если не указано, объект конфигурации применяется
     * ко всем файлам, соответствующим files. Если ignores используется без
     * каких-либо других ключей в объекте конфигурации, то шаблоны действуют
     * как глобальные игнорируемые.
     */
    ignores: [],

    /**
     * Параметры языка JavaScript.
     *
     * Экосистема JavaScript имеет множество сред выполнения, версий,
     * расширений и фреймворков. Каждый из них может иметь различный
     * поддерживаемый синтаксис и глобальные переменные. ESLint
     * позволяет вам настраивать параметры языка, специфичные для
     * JavaScript, используемого в вашем проекте, например
     * пользовательские глобальные переменные. Вы также можете
     * использовать плагины для расширения ESLint для поддержки
     * языковых параметров вашего проекта.
     */
    languageOptions: {
        /**
         * Указывает версию ECMAScript анализируемого кода, определяя как синтаксис,
         * так и доступные глобальные переменные.
         *
         * Установлен в 3 или 5 для ECMAScript 3 и 5 соответственно.
         * В противном случае вы можете использовать любой год между 2015 до настоящего времени.
         * В большинстве случаев мы рекомендуем использовать значение по умолчанию: "latest"
         * чтобы убедиться, что вы всегда используете самую последнюю версию ECMAScript.
         */
        ecmaVersion: 'latest',

        /**
         * Указывает режим используемого файла JavaScript.
         *
         * Возможные значения:
         *
         * - `module` - Модуль ESM (недействителен, если ecmaVersion является 3 или 5).
         *   Ваш код имеет область действия модуля и выполняется в строгом режиме.
         *
         * - `commonjs` - Модуль CommonJS (полезно, если ваш код использует require()).
         *   Ваш код имеет область действия функции верхнего уровня и работает в нестрогом режиме.
         *
         * - `script`- немодульный.
         *   Ваш код имеет общую глобальную область видимости и работает в нестрогом режиме.
         */
        sourceType: 'module',

        /**
         * Объект, определяющий дополнительные объекты, которые следует добавить
         * в глобальную область видимости во время проверки.
         */
        globals: { ...globals.browser },

        /**
         * Объект, содержащий parse() метод или parseForESLint() метод. (по умолчанию: espree)
         */
        parser: espree,

        /**
         * Объект, определяющий дополнительные параметры, которые передаются
         * непосредственно в parse() или parseForESLint()метод на парсере.
         * Доступные параметры зависят от анализатора.
         */
        parserOptions: {
            /**
             * Разрешить использование зарезервированных слов в качестве
             * идентификаторов (если ecmaVersion является 3).
             */
            allowReserved: false,

            /**
             * Объект, указывающий, какие дополнительные возможности языка
             * вы хотели бы использовать.
             */
            ecmaFeatures: {
                /**
                 * Позволять return заявления в глобальном масштабе.
                 */
                globalReturn: false,

                /**
                 * Включить глобальный строгий режим (если ecmaVersion является 5 или больше).
                 */
                impliedStrict: false,

                /**
                 * Включить JSX.
                 */
                jsx: false,
            },
        },
    },

    /**
     * Параметры линтера.
     */
    linterOptions: {
        /**
         * Логическое значение, указывающее, разрешена ли встроенная конфигурация.
         */
        noInlineConfig: true,

        /**
         * Строка серьезности, указывающая, следует ли отслеживать и сообщать
         * о неиспользованных директивах отключения и включения и каким образом.
         * Для совместимости с устаревшими версиями true эквивалентно "warn"
         * и false эквивалентно "off". (по умолчанию: "warn").
         */
        reportUnusedDisableDirectives: 'warn',
    },

    /**
     * Объект, содержащий сопоставление имен плагинов с именами плагинов
     * и их объектами. Когда files указан, эти плагины доступны только
     * для соответствующих файлов.
     */
    plugins: {
        eslintPluginPrettier,
    },

    /**
     * Объект, содержащий настроенные правила.
     *
     * Когда files или ignores указаны, эти конфигурации правил доступны
     * только для соответствующих файлов.
     *
     * **Правила** — это основной строительный блок ESLint. Правило проверяет,
     * соответствует ли ваш код определенным ожиданиям и что делать, если
     * он этим ожиданиям не соответствует. Правила также могут содержать
     * дополнительные параметры конфигурации, специфичные для этого правила.
     *
     * Чтобы изменить серьезность правила, установите идентификатор правила,
     * равный одному из следующих значений:
     *
     * - "off" или 0 - отключить правило
     * - "warn" или 1 - включить правило как предупреждение (не влияет на код выхода)
     * - "error" или 2 - включить правило как ошибку (код выхода 1 при срабатывании)
     */
    rules: {
        /**
         * Принудить return операторы в обратных вызовах методов массива.
         *
         * @link https://eslint.org/docs/latest/rules/array-callback-return
         */
        'array-callback-return': [
            'error',
            {
                allowImplicit: true,
                checkForEach: true,
                allowVoid: false,
            },
        ],

        /**
         * Требовать super() вызовы конструкторов.
         *
         * @link https://eslint.org/docs/latest/rules/constructor-super
         */
        'constructor-super': 'error',

        /**
         * Принудительно выполнить предложение обновления цикла «for»,
         * перемещая счетчик в правильном направлении.
         *
         * @link https://eslint.org/docs/latest/rules/for-direction
         */
        'for-direction': 'error',

        /**
         * Принудить return утверждения в геттерах.
         *
         * @link https://eslint.org/docs/latest/rules/getter-return
         */
        'getter-return': [
            'error',
            {
                allowImplicit: true,
            },
        ],

        /**
         * Запретить использование асинхронной функции в качестве исполнителя обещаний.
         *
         * @link https://eslint.org/docs/latest/rules/no-async-promise-executor
         */
        'no-async-promise-executor': 'error',

        /**
         * Запретить await внутри циклов.
         *
         * @link https://eslint.org/docs/latest/rules/no-await-in-loop
         */
        'no-await-in-loop': 'error',

        /**
         * Запретить переназначение членов класса.
         *
         * @link https://eslint.org/docs/latest/rules/no-class-assign
         */
        'no-class-assign': 'error',

        /**
         * Запретить сравнение с -0.
         *
         * @link https://eslint.org/docs/latest/rules/no-compare-neg-zero
         */
        'no-compare-neg-zero': 'error',

        /**
         * Запретить операторы присваивания в условных выражениях.
         *
         * @link https://eslint.org/docs/latest/rules/no-cond-assign
         */
        'no-cond-assign': ['error', 'except-parens'],

        /**
         * Запретить переназначение const переменные.
         *
         * @link https://eslint.org/docs/latest/rules/no-const-assign
         */
        'no-const-assign': 'error',

        /**
         * Запретить выражения, в которых операция не влияет на значение.
         *
         * @link https://eslint.org/docs/latest/rules/no-constant-binary-expression
         */
        'no-constant-binary-expression': 'error',

        /**
         * Запретить постоянные выражения в условиях.
         *
         * @link https://eslint.org/docs/latest/rules/no-constant-condition
         */
        'no-constant-condition': ['error', { checkLoops: 'allExceptWhileTrue' }],

        /**
         * Запретить возврат значения из конструктора.
         *
         * @link https://eslint.org/docs/latest/rules/no-constructor-return
         */
        'no-constructor-return': 'off',

        /**
         * Запретить управляющие символы в регулярных выражениях.
         *
         * @link https://eslint.org/docs/latest/rules/no-control-regex
         */
        'no-control-regex': 'error',

        /**
         * Запретить использование debugger.
         *
         * @link https://eslint.org/docs/latest/rules/no-debugger
         */
        'no-debugger': 'error',

        /**
         * Запретить дублирование аргументов в function определения.
         *
         * @link https://eslint.org/docs/latest/rules/no-dupe-args
         */
        'no-dupe-args': 'error',

        /**
         * Запретить дублирование членов класса.
         *
         * @link https://eslint.org/docs/latest/rules/no-dupe-class-members
         */
        'no-dupe-class-members': 'error',

        /**
         * Запретить дублирование условий в цепочках if-else-if.
         *
         * @link https://eslint.org/docs/latest/rules/no-dupe-else-if
         */
        'no-dupe-else-if': 'error',

        /**
         * Запретить дублирование ключей в литералах объектов.
         *
         * @link https://eslint.org/docs/latest/rules/no-dupe-keys
         */
        'no-dupe-keys': 'error',

        /**
         * Запретить дублирование меток регистра.
         *
         * @link https://eslint.org/docs/latest/rules/no-duplicate-case
         */
        'no-duplicate-case': 'error',

        /**
         * Это правило требует, чтобы весь импорт из одного модуля, который можно объединить,
         * существовал в одном import заявление.
         *
         * @link https://eslint.org/docs/latest/rules/no-duplicate-imports
         */
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true,
            },
        ],

        /**
         * Запретить пустые классы символов в регулярных выражениях.
         *
         * @link https://eslint.org/docs/latest/rules/no-empty-character-class
         */
        'no-empty-character-class': 'error',

        /**
         * Запретить пустые шаблоны деструктуризации.
         *
         * @link https://eslint.org/docs/latest/rules/no-empty-pattern
         */
        'no-empty-pattern': 'error',

        /**
         * Запретить переназначение исключений в catch статьи.
         *
         * @link https://eslint.org/docs/latest/rules/no-ex-assign
         */
        'no-ex-assign': 'error',

        /**
         * Запретить провал case заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-fallthrough
         */
        'no-fallthrough': 'error',

        /**
         * Запретить переназначение function декларации.
         *
         * @link https://eslint.org/docs/latest/rules/no-func-assign
         */
        'no-func-assign': 'error',

        /**
         * Запретить назначение импортированным привязкам.
         *
         * @link https://eslint.org/docs/latest/rules/no-import-assign
         */
        'no-import-assign': 'error',

        /**
         * Запретить переменную или function объявления во вложенных блоках.
         *
         * @link https://eslint.org/docs/latest/rules/no-inner-declarations
         */
        'no-inner-declarations': ['error', 'functions', { blockScopedFunctions: 'disallow' }],

        /**
         * Запретить недопустимые строки регулярных выражений в RegExp конструкторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-invalid-regexp
         */
        'no-invalid-regexp': [
            'error',
            {
                allowConstructorFlags: [],
            },
        ],

        /**
         * Запретить неправильные пробелы.
         *
         * @link https://eslint.org/docs/latest/rules/no-irregular-whitespace
         */
        'no-irregular-whitespace': [
            'off',
            {
                skipStrings: true,
                skipComments: true,
                skipRegExps: false,
                skipTemplates: false,
                skipJSXText: false,
            },
        ],

        /**
         * Запретить литеральные числа, которые теряют точность.
         *
         * @link https://eslint.org/docs/latest/rules/no-loss-of-precision
         */
        'no-loss-of-precision': 'error',

        /**
         * Запретить символы, состоящие из нескольких кодовых точек в синтаксисе класса символов.
         *
         * @link https://eslint.org/docs/latest/rules/no-misleading-character-class
         */
        'no-misleading-character-class': [
            'error',
            {
                allowEscape: true,
            },
        ],

        /**
         * Запретить new операторы с глобальными функциями, не являющимися конструкторами.
         *
         * @link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
         */
        'no-new-native-nonconstructor': 'error',

        /**
         * Запретить вызов свойств глобального объекта как функций.
         *
         * @link https://eslint.org/docs/latest/rules/no-obj-calls
         */
        'no-obj-calls': 'error',

        /**
         * Запретить возврат значений из функций-исполнителей Promise.
         *
         * @link https://eslint.org/docs/latest/rules/no-promise-executor-return
         */
        'no-promise-executor-return': 'error',

        /**
         * Запретить звонки некоторым Object.prototype методы
         * непосредственно на объектах.
         *
         * @link https://eslint.org/docs/latest/rules/no-prototype-builtins
         */
        'no-prototype-builtins': 'off',

        /**
         * Запретить задания, в которых обе стороны абсолютно одинаковы.
         *
         * @link https://eslint.org/docs/latest/rules/no-self-assign
         */
        'no-self-assign': [
            'error',
            {
                props: true,
            },
        ],

        /**
         * Запретить сравнения, в которых обе стороны абсолютно одинаковы.
         *
         * @link https://eslint.org/docs/latest/rules/no-self-compare
         */
        'no-self-compare': 'error',

        /**
         * Запретить возврат значений из установщиков.
         *
         * @link https://eslint.org/docs/latest/rules/no-setter-return
         */
        'no-setter-return': 'error',

        /**
         * Запретить разреженные массивы.
         *
         * @link https://eslint.org/docs/latest/rules/no-sparse-arrays
         */
        'no-sparse-arrays': 'error',

        /**
         * Запретить синтаксис буквенного заполнителя шаблона в обычных строках.
         *
         * @link https://eslint.org/docs/latest/rules/no-template-curly-in-string
         */
        'no-template-curly-in-string': 'error',

        /**
         * Запретить this / super перед звонком super() в конструкторах.
         *
         * @link https://eslint.org/docs/latest/rules/no-this-before-super
         */
        'no-this-before-super': 'error',

        /**
         * Запретить использование необъявленных переменных, если это не указано в global Комментарии.
         *
         * @link https://eslint.org/docs/latest/rules/no-undef
         */
        'no-undef': [
            'error',
            {
                typeof: true,
            },
        ],

        /**
         * Запретить запутанные многострочные выражения.
         *
         * @link https://eslint.org/docs/latest/rules/no-unexpected-multiline
         */
        'no-unexpected-multiline': 'error',

        /**
         * Запретить неизмененные условия цикла.
         *
         * @link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
         */
        'no-unmodified-loop-condition': 'error',

        /**
         * Запретить недоступный код после return, throw, continue, и break заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-unreachable
         */
        'no-unreachable': 'error',

        /**
         * Запретить циклы с телом, допускающим только одну итерацию.
         *
         * @link https://eslint.org/docs/latest/rules/no-unreachable-loop
         */
        'no-unreachable-loop': [
            'error',
            {
                ignore: [],
            },
        ],

        /**
         * Запретить операторы потока управления в finally блоки.
         *
         * @link https://eslint.org/docs/latest/rules/no-unsafe-finally
         */
        'no-unsafe-finally': 'error',

        /**
         * Запретить отрицание левого операнда операторов отношения.
         *
         * @link https://eslint.org/docs/latest/rules/no-unsafe-negation
         */
        'no-unsafe-negation': [
            'error',
            {
                enforceForOrderingRelations: true,
            },
        ],

        /**
         * Запретить использование необязательной цепочки в контекстах,
         * где undefined значение не допускается.
         *
         * @link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
         */
        'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

        /**
         * Запретить неиспользуемые члены частного класса.
         *
         * @link https://eslint.org/docs/latest/rules/no-unused-private-class-members
         */
        'no-unused-private-class-members': 'error',

        /**
         * Запретить неиспользуемые переменные.
         *
         * @link https://eslint.org/docs/latest/rules/no-unused-vars
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '',
                args: 'after-used',
                argsIgnorePattern: '',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '',
                destructuredArrayIgnorePattern: '',
                ignoreRestSiblings: false,
                ignoreClassWithStaticInitBlock: false,
                reportUsedIgnorePattern: false,
            },
        ],

        /**
         * Запретить использование переменных до их определения.
         *
         * @link https://eslint.org/docs/latest/rules/no-use-before-define
         */
        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true,
                allowNamedExports: false,
            },
        ],

        /**
         * Запретить присвоение переменных, если значение не используется.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-assignment
         */
        'no-useless-assignment': 'off',

        /**
         * Запретить бесполезные обратные ссылки в регулярных выражениях.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-backreference
         */
        'no-useless-backreference': 'error',

        /**
         * Запретить назначения, которые могут привести к состояниям гонки
         * из-за использования await или yield.
         *
         * @link https://eslint.org/docs/latest/rules/require-atomic-updates
         */
        'require-atomic-updates': [
            'error',
            {
                allowProperties: false,
            },
        ],

        /**
         * Требовать звонки на isNaN() при проверке NaN.
         *
         * @link https://eslint.org/docs/latest/rules/use-isnan
         */
        'use-isnan': [
            'error',
            {
                enforceForSwitchCase: true,
                enforceForIndexOf: true,
            },
        ],

        /**
         * Принудительное сравнение typeof выражения против допустимых строк.
         *
         * @link https://eslint.org/docs/latest/rules/valid-typeof
         */
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: false,
            },
        ],

        /**
         * Принудительно использовать пары геттеров и сеттеров в объектах и классах.
         *
         * @link https://eslint.org/docs/latest/rules/accessor-pairs
         */
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: true,
                enforceForClassMembers: true,
            },
        ],

        /**
         * Требовать фигурные скобки вокруг тел функций стрелок.
         *
         * @link https://eslint.org/docs/latest/rules/arrow-body-style
         */
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],

        /**
         * Обеспечьте использование переменных в пределах области, в которой они определены.
         *
         * @link https://eslint.org/docs/latest/rules/block-scoped-var
         */
        'block-scoped-var': 'error',

        /**
         * Применять соглашение об именах в верблюжьем регистре.
         *
         * @link https://eslint.org/docs/latest/rules/camelcase
         */
        camelcase: 'off',

        /**
         * Принудительно или запретить использование заглавной буквы первой буквы комментария.
         *
         * @link https://eslint.org/docs/latest/rules/capitalized-comments
         */
        'capitalized-comments': 'off',

        /**
         * Обеспечьте, чтобы методы класса использовали this.
         *
         * @link https://eslint.org/docs/latest/rules/class-methods-use-this
         */
        'class-methods-use-this': 'off',

        /**
         * Обеспечьте максимальную цикломатическую сложность, разрешенную в программе.
         *
         * @link https://eslint.org/docs/latest/rules/complexity
         */
        complexity: 'off',

        /**
         * Требовать return операторы, чтобы всегда или никогда не указывать значения.
         *
         * @link https://eslint.org/docs/latest/rules/consistent-return
         */
        'consistent-return': [
            'error',
            {
                treatUndefinedAsUnspecified: false,
            },
        ],

        /**
         * Обеспечьте согласованное именование при захвате текущего контекста выполнения.
         *
         * @link https://eslint.org/docs/latest/rules/consistent-this
         */
        'consistent-this': ['error', 'self'],

        /**
         * Обеспечьте согласованный стиль фигурных скобок для всех операторов управления.
         *
         * @link https://eslint.org/docs/latest/rules/curly
         */
        curly: 'error',

        /**
         * Требовать default дела в switch заявления.
         *
         * @link https://eslint.org/docs/latest/rules/default-case
         */
        'default-case': 'error',

        /**
         * Заставить предложения по умолчанию в операторах переключения быть последними.
         *
         * @link https://eslint.org/docs/latest/rules/default-case-last
         */
        'default-case-last': 'error',

        /**
         * Сделать параметры по умолчанию последними.
         *
         * @link https://eslint.org/docs/latest/rules/default-param-last
         */
        'default-param-last': 'error',

        /**
         * Применяйте точечную запись, когда это возможно.
         *
         * @link https://eslint.org/docs/latest/rules/dot-notation
         */
        'dot-notation': 'error',

        /**
         * Требуйте использования === и !==.
         *
         * @link https://eslint.org/docs/latest/rules/eqeqeq
         */
        eqeqeq: 'error',

        /**
         * Требовать, чтобы имена функций соответствовали имени переменной
         * или свойства, которому они назначены.
         *
         * @link https://eslint.org/docs/latest/rules/func-name-matching
         */
        'func-name-matching': 'error',

        /**
         * Требовать или запретить именованные function выражения.
         *
         * @link https://eslint.org/docs/latest/rules/func-names
         */
        'func-names': ['error', 'as-needed'],

        /**
         * Обеспечьте последовательное использование любого function объявления
         * или выражения, присвоенные переменным.
         *
         * @link https://eslint.org/docs/latest/rules/func-style
         */
        'func-style': 'off',

        /**
         * Требовать сгруппированные пары аксессоров в объектных литералах и классах.
         *
         * @link https://eslint.org/docs/latest/rules/grouped-accessor-pairs
         */
        'grouped-accessor-pairs': 'error',

        /**
         * Требовать for-in петли для включения if заявление.
         *
         * @link https://eslint.org/docs/latest/rules/guard-for-in
         */
        'guard-for-in': 'off',

        /**
         * Запретить указанные идентификаторы.
         *
         * @link https://eslint.org/docs/latest/rules/id-denylist
         */
        'id-denylist': 'off',

        /**
         * Обеспечьте соблюдение минимальной и максимальной длины идентификатора.
         *
         * @link https://eslint.org/docs/latest/rules/id-length
         */
        'id-length': 'off',

        /**
         * Требовать, чтобы идентификаторы соответствовали указанному регулярному выражению.
         *
         * @link https://eslint.org/docs/latest/rules/id-match
         */
        'id-match': 'off',

        /**
         * Требовать или запрещать инициализацию в объявлениях переменных.
         *
         * @link https://eslint.org/docs/latest/rules/init-declarations
         */
        'init-declarations': 'off',

        /**
         * Требовать или запретить сокращение логического оператора присваивания.
         *
         * @link https://eslint.org/docs/latest/rules/logical-assignment-operators
         */
        'logical-assignment-operators': 'off',

        /**
         * Установить максимальное количество классов в файле.
         *
         * @link https://eslint.org/docs/latest/rules/max-classes-per-file
         */
        'max-classes-per-file': 'off',

        /**
         * Установите максимальную глубину вложения блоков.
         *
         * @link https://eslint.org/docs/latest/rules/max-depth
         */
        'max-depth': 'off',

        /**
         * Установить максимальное количество строк в файле.
         *
         * @link https://eslint.org/docs/latest/rules/max-lines
         */
        'max-lines': 'off',

        /**
         * Обеспечьте максимальное количество строк кода в функции.
         *
         * @link https://eslint.org/docs/latest/rules/max-lines-per-function
         */
        'max-lines-per-function': 'off',

        /**
         * Обеспечьте максимальную глубину вложения обратных вызовов.
         *
         * @link https://eslint.org/docs/latest/rules/max-nested-callbacks
         */
        'max-nested-callbacks': 'off',

        /**
         * Обеспечьте максимальное количество параметров в определениях функций.
         *
         * @link https://eslint.org/docs/latest/rules/max-params
         */
        'max-params': 'off',

        /**
         * Обеспечьте максимальное количество операторов, разрешенное в функциональных блоках.
         *
         * @link https://eslint.org/docs/latest/rules/max-statements
         */
        'max-statements': 'off',

        /**
         * Требовать, чтобы имена конструкторов начинались с заглавной буквы.
         *
         * @link https://eslint.org/docs/latest/rules/new-cap
         */
        'new-cap': 'off',

        /**
         * Запретить использование alert, confirm, и prompt.
         *
         * @link https://eslint.org/docs/latest/rules/no-alert
         */
        'no-alert': 'error',

        /**
         * Запретить Array конструкторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-array-constructor
         */
        'no-array-constructor': 'error',

        /**
         * Запретить побитовые операторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-bitwise
         */
        'no-bitwise': 'off',

        /**
         * Запретить использование arguments.caller или arguments.callee.
         *
         * @link https://eslint.org/docs/latest/rules/no-caller
         */
        'no-caller': 'error',

        /**
         * Запретить лексические объявления в предложениях case.
         *
         * @link https://eslint.org/docs/latest/rules/no-case-declarations
         */
        'no-case-declarations': 'error',

        /**
         * Запретить использование console.
         *
         * @link https://eslint.org/docs/latest/rules/no-console
         */
        'no-console': 'off',

        /**
         * Запретить continue заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-continue
         */
        'no-continue': 'off',

        /**
         * Запретить удаление переменных.
         *
         * @link https://eslint.org/docs/latest/rules/no-delete-var
         */
        'no-delete-var': 'error',

        /**
         * Явно запретить знаки равенства в начале регулярных выражений.
         *
         * @link https://eslint.org/docs/latest/rules/no-div-regex
         */
        'no-div-regex': 'error',

        /**
         * Запретить else блоки после return заявления в if заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-else-return
         */
        'no-else-return': 'error',

        /**
         * Запретить пустые операторы блоков.
         *
         * @link https://eslint.org/docs/latest/rules/no-empty
         */
        'no-empty': 'error',

        /**
         * Запретить пустые функции.
         *
         * @link https://eslint.org/docs/latest/rules/no-empty-function
         */
        'no-empty-function': 'off',

        /**
         * Запретить пустые статические блоки.
         *
         * @link https://eslint.org/docs/latest/rules/no-empty-static-block
         */
        'no-empty-static-block': 'error',

        /**
         * Запретить null сравнения без операторов проверки типов.
         *
         * @link https://eslint.org/docs/latest/rules/no-eq-null
         */
        'no-eq-null': 'error',

        /**
         * Запретить использование eval().
         *
         * @link https://eslint.org/docs/latest/rules/no-eval
         */
        'no-eval': 'off',

        /**
         * Запретить расширение собственных типов.
         *
         * @link https://eslint.org/docs/latest/rules/no-extend-native
         */
        'no-extend-native': 'error',

        /**
         * Запретить ненужные звонки на .bind().
         *
         * @link https://eslint.org/docs/latest/rules/no-extra-bind
         */
        'no-extra-bind': 'error',

        /**
         * Запретить ненужные логические приведения.
         *
         * @link https://eslint.org/docs/latest/rules/no-extra-boolean-cast
         */
        'no-extra-boolean-cast': 'error',

        /**
         * Запретить ненужные ярлыки.
         *
         * @link https://eslint.org/docs/latest/rules/no-extra-label
         */
        'no-extra-label': 'error',

        /**
         * Запретить назначения собственным объектам или глобальным переменным,
         * доступным только для чтения.
         *
         * @link https://eslint.org/docs/latest/rules/no-global-assign
         */
        'no-global-assign': 'error',

        /**
         * Запретить преобразования сокращенных типов.
         *
         * @link https://eslint.org/docs/latest/rules/no-implicit-coercion
         */
        'no-implicit-coercion': 'error',

        /**
         * Запретить объявления в глобальной области видимости.
         *
         * @link https://eslint.org/docs/latest/rules/no-implicit-globals
         */
        'no-implicit-globals': 'error',

        /**
         * Запретить использование eval()-подобные методы.
         *
         * @link https://eslint.org/docs/latest/rules/no-implied-eval
         */
        'no-implied-eval': 'error',

        /**
         * Запретить встроенные комментарии после кода.
         *
         * @link https://eslint.org/docs/latest/rules/no-inline-comments
         */
        'no-inline-comments': 'error',

        /**
         * Запретить использование this в контекстах, где значение this является undefined.
         *
         * @link https://eslint.org/docs/latest/rules/no-invalid-this
         */
        'no-invalid-this': 'error',

        /**
         * Запретить использование __iterator__ свойство.
         *
         * @link https://eslint.org/docs/latest/rules/no-iterator
         */
        'no-iterator': 'error',

        /**
         * Запретить метки, имя которых совпадает с именем переменной.
         *
         * @link https://eslint.org/docs/latest/rules/no-label-var
         */
        'no-label-var': 'error',

        /**
         * Запретить помеченные утверждения.
         *
         * @link https://eslint.org/docs/latest/rules/no-labels
         */
        'no-labels': 'error',

        /**
         * Запретить ненужные вложенные блоки.
         *
         * @link https://eslint.org/docs/latest/rules/no-lone-blocks
         */
        'no-lone-blocks': 'error',

        /**
         * Запретить if заявления как единственное утверждение в else блоки.
         *
         * @link https://eslint.org/docs/latest/rules/no-lonely-if
         */
        'no-lonely-if': 'error',

        /**
         * Запретить объявления функций, содержащие небезопасные ссылки внутри операторов цикла.
         *
         * @link https://eslint.org/docs/latest/rules/no-loop-func
         */
        'no-loop-func': 'off',

        /**
         * Запретить магические числа.
         *
         * @link https://eslint.org/docs/latest/rules/no-magic-numbers
         */
        'no-magic-numbers': 'off',

        /**
         * Запретить использование связанных выражений присваивания.
         *
         * @link https://eslint.org/docs/latest/rules/no-multi-assign
         */
        'no-multi-assign': 'error',

        /**
         * Запретить многострочные строки.
         *
         * @link https://eslint.org/docs/latest/rules/no-multi-str
         */
        'no-multi-str': 'error',

        /**
         * Запретить отрицательные условия.
         *
         * @link https://eslint.org/docs/latest/rules/no-negated-condition
         */
        'no-negated-condition': 'error',

        /**
         * Запретить вложенные троичные выражения.
         *
         * @link https://eslint.org/docs/latest/rules/no-nested-ternary
         */
        'no-nested-ternary': 'error',

        /**
         * Запретить new операторы вне присваиваний или сравнений.
         *
         * @link https://eslint.org/docs/latest/rules/no-new
         */
        'no-new': 'error',

        /**
         * Запретить new операторы с Function объект.
         *
         * @link https://eslint.org/docs/latest/rules/no-new-func
         */
        'no-new-func': 'off',

        /**
         * Запретить new операторы с String, Number, и Boolean объекты.
         *
         * @link https://eslint.org/docs/latest/rules/no-new-wrappers
         */
        'no-new-wrappers': 'error',

        /**
         * Запретить \8 и \9 escape-последовательности в строковых литералах.
         *
         * @link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
         */
        'no-nonoctal-decimal-escape': 'error',

        /**
         * Запретить вызовы на Object конструктор без аргумента.
         *
         * @link https://eslint.org/docs/latest/rules/no-object-constructor
         */
        'no-object-constructor': 'off',

        /**
         * Запретить восьмеричные литералы.
         *
         * @link https://eslint.org/docs/latest/rules/no-octal
         */
        'no-octal': 'off',

        /**
         * Запретить восьмеричные escape-последовательности в строковых литералах.
         *
         * @link https://eslint.org/docs/latest/rules/no-octal-escape
         */
        'no-octal-escape': 'off',

        /**
         * Запретить переназначение function параметры.
         *
         * @link https://eslint.org/docs/latest/rules/no-param-reassign
         */
        'no-param-reassign': 'off',

        /**
         * Запретить унарные операторы ++ и --.
         *
         * @link https://eslint.org/docs/latest/rules/no-plusplus
         */
        'no-plusplus': 'off',

        /**
         * Запретить использование __proto__ свойство.
         *
         * @link https://eslint.org/docs/latest/rules/no-proto
         */
        'no-proto': 'error',

        /**
         * Запретить повторное объявление переменной.
         *
         * @link https://eslint.org/docs/latest/rules/no-redeclare
         */
        'no-redeclare': 'error',

        /**
         * Запретить использование нескольких пробелов в регулярных выражениях.
         *
         * @link https://eslint.org/docs/latest/rules/no-regex-spaces
         */
        'no-regex-spaces': 'error',

        /**
         * Запретить указанные имена в экспорте.
         *
         * @link https://eslint.org/docs/latest/rules/no-restricted-exports
         */
        'no-restricted-exports': 'off',

        /**
         * Запретить указанные глобальные переменные.
         *
         * @link https://eslint.org/docs/latest/rules/no-restricted-globals
         */
        'no-restricted-globals': 'off',

        /**
         * Запретить указанные модули при загрузке import.
         *
         * @link https://eslint.org/docs/latest/rules/no-restricted-imports
         */
        'no-restricted-imports': 'off',

        /**
         * Запретить определенные свойства определенных объектов.
         *
         * @link https://eslint.org/docs/latest/rules/no-restricted-properties
         */
        'no-restricted-properties': 'off',

        /**
         * Запретить указанный синтаксис.
         *
         * @link https://eslint.org/docs/latest/rules/no-restricted-syntax
         */
        'no-restricted-syntax': 'off',

        /**
         * Запретить операторы присваивания в return заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-return-assign
         */
        'no-return-assign': 'error',

        /**
         * Запретить javascript: URL-адреса.
         *
         * @link https://eslint.org/docs/latest/rules/no-script-url
         */
        'no-script-url': 'error',

        /**
         * Запретить операторы-запятые.
         *
         * @link https://eslint.org/docs/latest/rules/no-sequences
         */
        'no-sequences': 'error',

        /**
         * Запретить объявления переменных из переменных теневого копирования,
         * объявленных во внешней области видимости.
         *
         * @link https://eslint.org/docs/latest/rules/no-shadow
         */
        'no-shadow': 'error',

        /**
         * Запретить идентификаторам скрывать ограниченные имена.
         *
         * @link https://eslint.org/docs/latest/rules/no-shadow-restricted-names
         */
        'no-shadow-restricted-names': 'error',

        /**
         * Запретить тернарные операторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-ternary
         */
        'no-ternary': 'off',

        /**
         * Запретить выбрасывать литералы в исключения.
         *
         * @link https://eslint.org/docs/latest/rules/no-throw-literal
         */
        'no-throw-literal': 'error',

        /**
         * Запретить инициализацию переменных undefined.
         *
         * @link https://eslint.org/docs/latest/rules/no-undef-init
         */
        'no-undef-init': 'error',

        /**
         * Запретить использование undefined как идентификатор.
         *
         * @link https://eslint.org/docs/latest/rules/no-undefined
         */
        'no-undefined': 'off',

        /**
         * Запретить висячие подчеркивания в идентификаторах.
         *
         * @link https://eslint.org/docs/latest/rules/no-underscore-dangle
         */
        'no-underscore-dangle': 'off',

        /**
         * Запретить тернарные операторы, если существуют более простые альтернативы.
         *
         * @link https://eslint.org/docs/latest/rules/no-unneeded-ternary
         */
        'no-unneeded-ternary': 'error',

        /**
         * Запретить неиспользуемые выражения.
         *
         * @link https://eslint.org/docs/latest/rules/no-unused-expressions
         */
        'no-unused-expressions': 'off',

        /**
         * Запретить неиспользуемые ярлыки.
         *
         * @link https://eslint.org/docs/latest/rules/no-unused-labels
         */
        'no-unused-labels': 'error',

        /**
         * Запретить ненужные звонки на .call() и .apply().
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-call
         */
        'no-useless-call': 'error',

        /**
         * Запретить ненужное catch статьи.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-catch
         */
        'no-useless-catch': 'error',

        /**
         * Запретить ненужные вычисляемые ключи свойств в объектах и классах.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-computed-key
         */
        'no-useless-computed-key': 'error',

        /**
         * Запретить ненужное объединение литералов или литералов шаблонов.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-concat
         */
        'no-useless-concat': 'error',

        /**
         * Запретить ненужные конструкторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-constructor
         */
        'no-useless-constructor': 'error',

        /**
         * Запретить ненужные escape-символы.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-escape
         */
        'no-useless-escape': 'error',

        /**
         * Запретить переименование импорта, экспорта и деструктурированных назначений на одно и то же имя.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-rename
         */
        'no-useless-rename': 'error',

        /**
         * Запретить избыточные операторы возврата.
         *
         * @link https://eslint.org/docs/latest/rules/no-useless-return
         */
        'no-useless-return': 'error',

        /**
         * Требовать let или const вместо var.
         *
         * @link https://eslint.org/docs/latest/rules/no-var
         */
        'no-var': 'error',

        /**
         * Запретить void операторы.
         *
         * @link https://eslint.org/docs/latest/rules/no-void
         */
        'no-void': 'error',

        /**
         * Запретить указанные условия предупреждения в комментариях.
         *
         * @link https://eslint.org/docs/latest/rules/no-warning-comments
         */
        'no-warning-comments': 'off',

        /**
         * Запретить with заявления.
         *
         * @link https://eslint.org/docs/latest/rules/no-with
         */
        'no-with': 'error',

        /**
         * Требовать или запретить сокращенный синтаксис методов и свойств для объектных литералов.
         *
         * @link https://eslint.org/docs/latest/rules/object-shorthand
         */
        'object-shorthand': 'error',

        /**
         * Обеспечить объявление переменных вместе или по отдельности в функциях.
         *
         * @link https://eslint.org/docs/latest/rules/one-var
         */
        'one-var': ['error', 'never'],

        /**
         * Требовать или запретить сокращение оператора присваивания, где это возможно.
         *
         * @link https://eslint.org/docs/latest/rules/operator-assignment
         */
        'operator-assignment': 'error',

        /**
         * Требовать использования функций стрелок для обратных вызовов.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-arrow-callback
         */
        'prefer-arrow-callback': 'error',

        /**
         * Требовать const объявления для переменных, которые никогда не переназначаются после объявления.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-const
         */
        'prefer-const': 'error',

        /**
         * Требовать деструктуризации массивов и/или объектов.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-destructuring
         */
        'prefer-destructuring': 'off',

        /**
         * Запретить использование Math.pow в пользу ** оператор.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
         */
        'prefer-exponentiation-operator': 'error',

        /**
         * Принудительное использование именованной группы захвата в регулярном выражении.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-named-capture-group
         */
        'prefer-named-capture-group': 'off',

        /**
         * Запретить parseInt() и Number.parseInt() в пользу двоичных,
         * восьмеричных и шестнадцатеричных литералов.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-numeric-literals
         */
        'prefer-numeric-literals': 'error',

        /**
         * Запретить использование Object.prototype.hasOwnProperty.call()
         * и предпочитают использовать Object.hasOwn().
         *
         * @link https://eslint.org/docs/latest/rules/prefer-object-has-own
         */
        'prefer-object-has-own': 'error',

        /**
         * Запретить использование Object.assign с литералом объекта в качестве
         * первого аргумента и вместо этого предпочесть использование расширения объекта.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-object-spread
         */
        'prefer-object-spread': 'error',

        /**
         * Требовать использования объектов Error в качестве причин отклонения обещания.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
         */
        'prefer-promise-reject-errors': 'error',

        /**
         * Запретить использование RegExp конструктор в пользу литералов регулярных выражений.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-regex-literals
         */
        'prefer-regex-literals': 'error',

        /**
         * Требуйте остальные параметры вместо arguments.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-rest-params
         */
        'prefer-rest-params': 'error',

        /**
         * Требуйте операторов распространения вместо .apply().
         *
         * @link https://eslint.org/docs/latest/rules/prefer-spread
         */
        'prefer-spread': 'error',

        /**
         * Требовать литералы шаблона вместо конкатенации строк.
         *
         * @link https://eslint.org/docs/latest/rules/prefer-template
         */
        'prefer-template': 'error',

        /**
         * Обеспечьте последовательное использование аргумента системы счисления
         * при использовании parseInt().
         *
         * @link https://eslint.org/docs/latest/rules/radix
         */
        radix: 'error',

        /**
         * Запретить асинхронные функции, у которых нет await выражение.
         *
         * @link https://eslint.org/docs/latest/rules/require-await
         */
        'require-await': 'error',

        /**
         * Обеспечьте использование u или v флаг в RegExp.
         *
         * @link https://eslint.org/docs/latest/rules/require-unicode-regexp
         */
        'require-unicode-regexp': 'off',

        /**
         * Требовать, чтобы функции генератора содержали yield.
         *
         * @link https://eslint.org/docs/latest/rules/require-yield
         */
        'require-yield': 'error',

        /**
         * Принудительно выполнять сортированные объявления импорта внутри модулей.
         *
         * @link https://eslint.org/docs/latest/rules/sort-imports
         */
        'sort-imports': 'off',

        /**
         * Требовать сортировку ключей объекта.
         *
         * @link https://eslint.org/docs/latest/rules/sort-keys
         */
        'sort-keys': 'off',

        /**
         * Требовать сортировки переменных в одном блоке объявлений.
         *
         * @link https://eslint.org/docs/latest/rules/sort-vars
         */
        'sort-vars': 'off',

        /**
         * Требовать или запрещать директивы строгого режима.
         *
         * @link https://eslint.org/docs/latest/rules/strict
         */
        strict: 'off',

        /**
         * Требовать описания символов.
         *
         * @link https://eslint.org/docs/latest/rules/symbol-description
         */
        'symbol-description': 'off',

        /**
         * Требовать var объявления должны быть размещены в верхней части их области видимости.
         *
         * @link https://eslint.org/docs/latest/rules/vars-on-top
         */
        'vars-on-top': 'off',

        /**
         * Требовать или запрещать условия «Йода».
         *
         * @link https://eslint.org/docs/latest/rules/yoda
         */
        yoda: ['error', 'never'],

        'eslintPluginPrettier/prettier': 'warn',
    },

    /**
     * Объект, содержащий пары имя-значение, которые должны быть доступны всем правилам.
     */
    settings: {},
};

/**
 * Конфигурация ESLint.
 *
 * @link https://eslint.org/docs/latest/use/getting-started
 */
export default [
    /**
     * Включает правила, которые ESLint рекомендует использовать всем,
     * чтобы избежать потенциальных ошибок.
     */
    pluginJs.configs.recommended,

    /**
     * Конфигурация пакета `prettier`.
     */
    eslintConfigPrettier,

    /**
     * Конфигурация библиотеки php.js
     */
    eslintConfig,
];
