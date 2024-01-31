module.exports =({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', () => {
        console.log('Executando testes...');
      });

      on('after:run', () => {
        console.log('Testes concluídos');
      });

      return Object.assign({}, config, {
        reporter: 'mochawesome',
        reporterOptions: {
          reportDir: 'cypress/report/mochawesome-report',
          overwrite: true,
          html: true,
          json: false,
          timestamp: 'mmddyyyy_HHMMss'
        },
      });
    },
  },
});
