function doGet(e) {
  return handleResponse(e);
}

function doPost(e) {
  return handleResponse(e);
}

function handleResponse(e) {
  // Configurar cabeceras CORS
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    // Si es un pre-vuelo OPTIONS
    if (e.postData && e.postData.type === "application/json" && !e.parameter.action) {
       // Manejo interno para POST o preflight en caso necesario
    }

    // Identificar acción: 'verify' (para Login) o 'rsvp' (para formulario)
    var action = e.parameter.action;
    
    // Abrir la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Invitados");

    if (action === "verify") {
      var code = e.parameter.code;
      if (!code) throw new Error("Código no proporcionado");
      
      var data = sheet.getDataRange().getValues();
      // Asumiendo Columnas: A=Codigo, B=Nombre, C=AsistentesPermitidos, D=Confirmacion
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] && data[i][0].toString().toUpperCase() === code.toUpperCase()) {
          return ContentService.createTextOutput(JSON.stringify({
             success: true,
             guest: {
               row: i + 1,
               code: data[i][0],
               name: data[i][1],
               passes: data[i][2],
               status: data[i][3]
             }
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: "Código inválido" }))
             .setMimeType(ContentService.MimeType.JSON);
             
    } else if (action === "rsvp") {
      // Para POST form data
      var payload;
      if (e.postData && e.postData.contents) {
         payload = JSON.parse(e.postData.contents);
      } else {
         payload = e.parameter;
      }

      var row = payload.row;       // la fila extraída durante el 'verify'
      var status = payload.status; // "Sí, Asistiré" o "No, Gracias"
      var extraInfo = payload.extraInfo || ""; 
      
      // Actualizar información
      if(row) {
        // Asumiendo que la columna D (4) es Confirmación y E (5) es Detalles extras.
        sheet.getRange(row, 4).setValue(status);
        if (extraInfo) {
          sheet.getRange(row, 5).setValue(extraInfo);
        }
        return ContentService.createTextOutput(JSON.stringify({ success: true }))
               .setMimeType(ContentService.MimeType.JSON);
      } else {
        throw new Error("No se envió fila para actualizar.");
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: "Acción desconocida" }))
           .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
           .setMimeType(ContentService.MimeType.JSON);
  }
}
